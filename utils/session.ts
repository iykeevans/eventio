// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession } from 'next-iron-session'

const withSession = (handler: any) =>
  withIronSession(handler, {
    password:
      'helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld',
    cookieName: 'appToken',
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === 'production',
    },
  })

export default withSession
