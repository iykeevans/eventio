import { FC, Dispatch, createContext, useContext, useReducer } from 'react'

import authReducer, { initialState, IInitialState } from './auth-reducer'

import Flex from '../../components/Styled/Flex'

interface IAuthContext {
  state: IInitialState
  dispatch: Dispatch<any>
}

const AuthContext = createContext<IAuthContext>({
  state: initialState,
  dispatch: () => null,
})

/**
 * Context for users dispatch
 */
const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Context for users dispatch
 */
const AuthLoader: FC = ({ children }) => {
  return (
    <Flex
      height="screen"
      width="full"
      justifyContent="center"
      alignItems="center"
    >
      Loading...
    </Flex>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth, AuthLoader }
