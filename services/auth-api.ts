import cookies from 'js-cookie'

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

export const refreshToken = async () => {
  try {
    const refreshToken = cookies.get('refresh-token')

    const response = await apiClient.post('auth/native', {
      json: { refreshToken },
    })
    return transformUserData(await response.json())
  } catch (error: any) {
    return error
  }
}
