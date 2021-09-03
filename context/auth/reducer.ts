import { ACTIONS } from '../../enums/constants'

export interface IInitialState {
  id: string
  firstName: string
  lastName: string
  email: string
  isLoggedIn: boolean
}

export const initialState: IInitialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  isLoggedIn: false,
}

/**
 * auth reducer
 *
 * @function
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
const authReducer = (
  state: IInitialState,
  action: { payload: any; type: ACTIONS }
) => {
  switch (action.type) {
    case ACTIONS.LOGIN: {
      const { id, firstName, lastName, email } = action.payload
      return {
        ...state,
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        isLoggedIn: true,
      }
    }

    case ACTIONS.LOGOUT:
      return {
        ...state,
        ...initialState,
      }

    default:
      throw new Error(`action type: ${action.type} may not exist`)
  }
}

export default authReducer
