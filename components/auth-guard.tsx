import { FC, useEffect } from 'react'
import { ACTIONS } from '../enums/constants'

import { useAuth, AuthLoader } from '../store/auth-context'

const AuthGuard: FC = ({ children }) => {
  // const {
  //   state: { isLoggedIn },
  //   dispatch,
  // } = useAuth()

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     dispatch({ type: ACTIONS.UPDATE_IS_LOGGED_IN, payload: true })
  //   }
  // }, [])

  // if (!isLoggedIn) return <AuthLoader />

  return <>{children}</>
}

export default AuthGuard
