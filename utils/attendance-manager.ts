import { IUser } from './types/users'
import { IEvent } from './types/events'

/**
 * Remove attendee from event.
 *
 * @function
 * @param {String} userId user identifier
 * @param {String} eventId event identifier
 * @param {Array} events[] events array
 * @return {Array} updated events array
 */
export const removeAttendee = (
  userId: string,
  eventId: string,
  events: IEvent[]
) => {
  const clonedEvents = [...events]
  const eventIndex = events.findIndex((eventItem) => eventItem.id === eventId)
  const updatedAttendees = events[eventIndex].attendees.filter(
    (attendee) => attendee.id !== userId
  )

  clonedEvents[eventIndex].attendees = updatedAttendees
  return clonedEvents
}

/**
 * Add attendee to an event.
 *
 * @function
 * @param {Object} user user object
 * @param {String} eventId event identifier
 * @param {Array} events[] events array
 * @return {Array} updated events array
 */
export const addAttendee = (user: IUser, eventId: string, events: IEvent[]) => {
  const clonedEvents = [...events]
  const eventIndex = events.findIndex((eventItem) => eventItem.id === eventId)

  const originalAttendees = events[eventIndex].attendees
  const updatedAttendees = [...originalAttendees, user]

  clonedEvents[eventIndex].attendees = updatedAttendees
  return clonedEvents
}

/**
 * Find attendee in an event.
 *
 * @function
 * @param {String} userId user identifier
 * @param {Object} event event object
 * @return {Boolean}
 */
export const findAttendee = (userId: string, event: IEvent): boolean => {
  return event.attendees.some((attendee) => attendee.id === userId)
}
