import apiClient from '.'
import cookies from 'js-cookie'

import { transformEventData } from '../utils/transform-response-data'
import { IEvent } from '../utils/types/events'

export const fetchEvents = async (): Promise<IEvent[]> => {
  try {
    const response: Response = await apiClient.get('events')
    const data = await response.json()
    return transformEventData(data)
  } catch (error: any) {
    return error
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
    return error
  }
}

export const joinEvent = async (eventId: string) => {
  try {
    const response: Response = await extendedApiClient.post(
      `events/${eventId}/attendees/me`
    )
    return await response.json()
  } catch (error) {
    return error
  }
}
