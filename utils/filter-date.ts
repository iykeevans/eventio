import { isPast, isFuture } from 'date-fns'

import { IEvent } from './types/events'

/**
 * Filter events by date using date-fns
 *
 * @param {String} filterOption
 * @param {Array} events
 */

const filterDate = (filterOption: string, events: IEvent[]) => {
  return events.filter((event) => {
    const date = new Date(event.startsAt)

    if (filterOption === 'PAST EVENTS') {
      return isPast(date)
    }
    if (filterOption === 'FUTURE EVENTS') {
      return isFuture(date)
    }
    return event
  })
}

export default filterDate
