import ky from 'ky'
import { loginUser } from '../../services/auth-api'
import withSession from '../../utils/session'

export default withSession(async (req, res) => {
  try {
    // we check that the user exists on GitHub and store some data in session
    const data = await ky.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/native`,
      {
        json: req.body,
        headers: {
          APIKey: process.env.NEXT_PUBLIC_API_KEY,
        },
      }
    )

    const user = { isLoggedIn: true, ...(await data.json()) }
    req.session.set('user', user)
    await req.session.save()
    //console.log('==------->> data', user)
    res.json(user)
  } catch (error) {
    console.log('==------->>err', error)
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error.data)
  }
})
