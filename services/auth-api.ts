import apiClient from '.'
import { transformUserData } from '../utils/transform-response-data'
import { IUser } from '../utils/types/users'

export const loginUser = async (payload: {}): Promise<IUser> => {
  try {
    const response = await apiClient.post('auth/native', { json: payload })
    return transformUserData(await response.json())
  } catch (error: any) {
    return error
  }
}

// export const refreshToken = async (token: string) => {
//   try {
//     const response = await axios({
//       method: 'post',
//       url: `${SETTINGS.API_URL}/${URLs.AUTH}`,
//       data: { refreshToken: token },
//       headers: simpleAuthHeader,
//     })
//     if (response.status === STATUS_CODE.OK) {
//       const authToken = response.headers.authorization

//       storeAuthToken(authToken)
//       return transformUserData(response.data)
//     }
//   } catch (error) {
//     throw new Error(error)
//   }
// }
