/**
 * Transform events data from API.
 *
 * @function
 * @param {Object} data api data
 * @return {Object} transformed app data
 */

interface IEventResponse {
  _id: string
  title: string
  description: string
  startsAt: string
  capacity: number | string
  createdAt: string
  updatedAt: string
  owner: {
    id: string
    firstName: string
    lastName: string
    email: string
  }
  attendees: IUserResponse[]
}

interface IEvent {
  id: string
  title: string
  description: string
  startsAt: string
  capacity: number | string
  createdAt: string
  updatedAt: string
  owner: {
    id: string
    firstName: string
    lastName: string
    email: string
  }
  attendees: IUser[]
}

interface IUserResponse {
  _id: string
  firstName: string
  lastName: string
  email: string
}

export const transformEventData = (data: IEventResponse): IEvent => {
  return {
    id: data._id || '',
    title: data.title || '',
    description: data.description || '',
    startsAt: data.startsAt || '',
    capacity: data.capacity || 0,
    createdAt: data.createdAt || '',
    updatedAt: data.updatedAt || '',
    owner: {
      id: data.owner.id || '',
      firstName: data.owner.firstName || '',
      lastName: data.owner.lastName || '',
      email: data.owner.email || '',
    },
    attendees: data.attendees.map((attendee) => {
      return {
        id: attendee._id || '',
        firstName: attendee.firstName || '',
        lastName: attendee.lastName || '',
        email: attendee.email || '',
      }
    }),
  }
}

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
}

export const transformUserData = (data: IUserResponse): IUser => {
  return {
    id: data['_id'],
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  }
}
