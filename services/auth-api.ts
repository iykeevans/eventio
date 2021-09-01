import apiClient from '.'
import { transformUserData, IUser } from '../utils/transform-response-data'

export const loginUser = async (payload: {}): Promise<IUser> => {
  try {
    const response = await apiClient.post('auth/native', { json: payload })

    localStorage.setItem('token', response.headers.get('authorization') || '')
    localStorage.setItem(
      'refreshToken',
      response.headers.get('refresh-token') || ''
    )

    // console.log(data.headers.get('authorization'))
    return transformUserData(await response.json())
  } catch (error) {
    throw new Error(error)
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
