import apiClient from '.'
import cookies from 'js-cookie'

import { transformEventData } from '../utils/transform-response-data'

export const fetchEvents = async () => {
  try {
    const response: Response = await apiClient.get('events')
    return transformEventData(await response.json())
  } catch (error) {
    throw new Error(error)
  }
}

const authorization = cookies.get('authorization')

const extendedApiClient = apiClient.extend({ headers: { authorization } })

export const leaveEvent = async (eventId: string) => {
  try {
    const response: Response = await extendedApiClient.delete(
      `events/${eventId}/attendees/me`
    )
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}

export const joinEvent = async (eventId: string) => {
  try {
    const response: Response = await extendedApiClient.post(
      `events/${eventId}/attendees/me`
    )
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}
