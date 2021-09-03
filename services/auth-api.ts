import apiClient from '.'
import { transformUserData } from '../utils/transform-response-data'
import { IUser } from '../utils/types/users'

export const loginUser = async (payload: {}): Promise<IUser> => {
  try {
    const response = await apiClient.post('auth/native', { json: payload })
    const token = response.headers.get('authorization')
    const refreshToken = response.headers.get('refresh-token')

    localStorage.setItem('token', token || '')
    localStorage.setItem('refresh-token', refreshToken || '')

    return transformUserData(await response.json())
  } catch (error: any) {
    return error
  }
}

export const refreshToken = async () => {
  try {
    localStorage.removeItem('token')
    const refreshToken = localStorage.getItem('refresh-token')

    const response = await apiClient.post('auth/native', {
      json: { refreshToken },
    })

    const token = response.headers.get('authorization')
    localStorage.setItem('token', token || '')

    return transformUserData(await response.json())
  } catch (error: any) {
    return error
  }
}
