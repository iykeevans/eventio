import React from 'react'
import styled from 'styled-components'

import getUserPossibleAction from '../../utils/get-user-possible-action'
import { IEvent } from '../../utils/types/events'
import trimString from '../../utils/trim-string'

import Flex from '../styled/Flex'
import Text from '../styled/Text'
import Box from '../styled/Box'
import Button from '../button'

import User from './User.svg'

interface IEventViewProps {
  event: IEvent
  userId: string
  handleUserAction: (actionType: string, eventId: string) => void
}

function CardItem(props: IEventViewProps) {
  const { event, userId, handleUserAction } = props
  const userPossibleAction = getUserPossibleAction(userId, event)

  return (
    <EventGridCard
      pl="5"
      plMd="8"
      pr="5"
      prMd="8"
      pt="9"
      ptMd="8"
      pb="9"
      pbMd="8"
    >
      <Text color="eventio.base-light-3" fontSizeMd="sm" mb="6" mbMd="5">
        {event.startsAt}
      </Text>

      <Text color="eventio.base" fontSize="2xl">
        {trimString(event.title, 26)}
      </Text>

      <Text color="eventio.base-light" fontSizeMd="sm" mb="8">
        {event.owner.firstName} {event.owner.lastName}
      </Text>

      <Text color="eventio.base-light-1" mb="10">
        {trimString(event.description, 65)}
      </Text>

      <Flex alignItems="center" justifyContent="between">
        <Flex alignItems="center">
          <User />
          <Text ml="3" fontSizeMd="sm" color="eventio.base-light-1">
            {`${event.attendees.length} of ${event.capacity}`}
          </Text>
        </Flex>

        <Button
          size="sm"
          variant={userPossibleAction.buttonColor}
          rounded="eventio.rounded-sm"
          onClick={() => handleUserAction(userPossibleAction.status, event.id)}
        >
          <Text
            fontSize="sm"
            fontSizeMd="sm"
            fontWeight="semibold"
            align="center"
            color={userPossibleAction.textColor}
          >
            {userPossibleAction.text}
          </Text>
        </Button>
      </Flex>
    </EventGridCard>
  )
}

const EventGridCard = styled(Box)`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  background: white;
`

export default CardItem
