import apiClient from '.'
import { transformUserData, IUser } from '../utils/transform-data'

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
