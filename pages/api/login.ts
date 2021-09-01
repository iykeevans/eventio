import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import ky from 'ky'
import cookie from 'cookie'

import withSession from '../../utils/session'

export default withSession(
  async (req: NextApiRequest & { session: Session }, res: NextApiResponse) => {
    try {
      const response = await ky.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/native`,
        {
          json: req.body,
          headers: {
            APIKey: process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      )

      res.setHeader('Set-Cookie', [
        cookie.serialize(
          'authorization',
          response.headers.get('authorization') || '',
          {
            httpOnly: false,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: process.env.NODE_ENV !== 'production' ? 'lax' : 'strict',
            path: '/',
          }
        ),
        cookie.serialize(
          'refresh-token',
          response.headers.get('refresh-token') || '',

          {
            httpOnly: false,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: process.env.NODE_ENV !== 'production' ? 'lax' : 'strict',
            path: '/',
          }
        ),
      ])

      const user = { isLoggedIn: true, ...(await response.json()) }

      req.session.set('user', user)
      await req.session.save()
      res.json(user)
    } catch (error) {
      const { response: fetchResponse } = error
      res.status(fetchResponse?.status || 500).json(error.data)
    }
  }
)
