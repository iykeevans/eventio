import { IEvent } from './types/events'
import { colors } from '../theme'

import { findAttendee } from './attendance-manager'

interface IGetUserPossibleAction {
  status: string
  buttonColor: string
  textColor: keyof typeof colors
  text: string
}

/**
 * Get user possible action.
 *
 * @function
 * @param {String} userId user identifier
 * @param {Array} events[] events array
 * @return {Object}
 */
const getUserPossibleAction = (
  userId: string,
  event: IEvent
): IGetUserPossibleAction => {
  if (event.owner.id === userId)
    return {
      status: 'isOwner',
      buttonColor: 'eventio.disabled',
      textColor: 'eventio.base-light-4',
      text: 'EDIT',
    }
  if (findAttendee(userId, event))
    return {
      status: 'canLeave',
      buttonColor: 'eventio.danger',
      textColor: 'eventio.light',
      text: 'LEAVE',
    }
  return {
    status: 'canJoin',
    buttonColor: 'eventio.primary',
    textColor: 'eventio.light',
    text: 'JOIN',
  }
}

export default getUserPossibleAction
