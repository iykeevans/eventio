import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../utils/session'

export default withSession(
  async (req: NextApiRequest & { session: Session }, res: NextApiResponse) => {
    req.session.destroy()
    res.json({ isLoggedIn: false })
  }
)
