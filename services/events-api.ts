import apiClient from '.'

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

export const leaveEvent = async (eventId: string) => {
  try {
    const authorization = localStorage.getItem('token') || ''

    const response: Response = await apiClient.delete(
      `events/${eventId}/attendees/me`,
      { headers: { authorization } }
    )
    return await response.json()
  } catch (error) {
    return error
  }
}

export const joinEvent = async (eventId: string) => {
  try {
    const authorization = localStorage.getItem('token') || ''

    const response: Response = await apiClient.post(
      `events/${eventId}/attendees/me`,
      { headers: { authorization } }
    )
    return await response.json()
  } catch (error) {
    return error
  }
}

type newEvent = {
  title: string
  description: string
  startsAt: string
  capacity: string
}

export const createEvent = async (event: newEvent) => {
  try {
    const authorization = localStorage.getItem('token') || ''

    const response: Response = await apiClient.post('events', {
      json: event,
      headers: { authorization },
    })
    return await response.json()
  } catch (error) {
    return error
  }
}
