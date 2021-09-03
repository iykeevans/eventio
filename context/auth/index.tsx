import { FC, Dispatch, createContext, useContext, useReducer } from 'react'

import authReducer, { initialState, IInitialState } from './reducer'

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

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }
