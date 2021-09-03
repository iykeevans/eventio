import { isPast, isFuture } from 'date-fns'

import { IEvent } from './types/events'

/**
 * Filter events by date using date-fns
 *
 * @param {String} filterOption
 * @param {Array} events
 * @returns {Boolean}
 */
const filterDate = (filterOption: string, events: IEvent[] = []) => {
  if (filterOption === 'PAST EVENTS') {
    return events.filter((event) => isPast(new Date(event.startsAt)))
  }

  if (filterOption === 'FUTURE EVENTS') {
    return events.filter((event) => isFuture(new Date(event.startsAt)))
  }

  return [...events]
}

export default filterDate
