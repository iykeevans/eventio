import { IEvent, IEventResponse } from './types/events'
import { IUserResponse, IUser } from './types/users'
// format(new Date(item.startsAt), 'MMM dd yyyy - h:mm a')

/**
 * Transform events data from API.
 *
 * @function
 * @param {Object} data api data
 * @return {Object} transformed app data
 */
export const transformEventData = (data: IEventResponse[]): IEvent[] => {
  return data.map((item: IEventResponse) => ({
    id: item?._id,
    title: item?.title,
    description: item?.description,
    startsAt: item?.startsAt,
    capacity: item?.capacity || 0,
    createdAt: item?.createdAt,
    updatedAt: item?.updatedAt,
    owner: {
      id: item?.owner.id,
      firstName: item?.owner.firstName,
      lastName: item?.owner.lastName,
      email: item?.owner.email,
    },
    attendees: item.attendees.map((attendee) => {
      return {
        id: attendee._id,
        firstName: attendee.firstName,
        lastName: attendee.lastName,
        email: attendee.email,
      }
    }),
  }))
}

/**
 * Transform user data from API.
 *
 * @function
 * @param {Object} data api data
 * @return {Object} transformed app data
 */
export const transformUserData = (data: IUserResponse): IUser => {
  return {
    id: data['_id'],
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  }
}
