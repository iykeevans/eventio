import React from 'react'
import { IEvent } from '../../utils/types/events'
import getUserPossibleAction from '../../utils/get-user-possible-action'

import Flex from '../styled/Flex'
import Text from '../styled/Text'
import Button from '../button'
import trimString from '../../utils/trim-string'

interface IListItemProps {
  event: IEvent
  userId: string
  handleUserAction: (actionType: string, eventId: string) => void
}

function ListItem(props: IListItemProps) {
  const { event, userId, handleUserAction } = props
  const userPossibleAction = getUserPossibleAction(userId, event)

  return (
    <Flex
      direction="column"
      directionMd="row"
      alignItemsMd="center"
      bgColor="eventio.light"
      rounded="eventio.rounded"
      shadow="eventio.shadow"
      plMd="7"
      prMd="7"
      pl="5"
      pr="5"
      pt="4"
      ptMd="5"
      pb="4"
      pbMd="5"
      mb="4"
    >
      <Text color="eventio.base" fontSize="lg" fontSizeMd="lg" widthMd="3/12">
        {trimString(event.title, 26)}
      </Text>

      <Text
        color="eventio.base-light-1"
        fontSize="base"
        widthMd="3/12"
        mb="4"
        mbMd="0"
      >
        {trimString(event.description, 30)}
      </Text>

      <Text
        color="eventio.base-light"
        fontSize="base"
        fontSizeMd="sm"
        widthMd="2/12"
        display="none"
        displayMd="block"
      >
        {event.owner.firstName} {event.owner.lastName}
      </Text>

      <Flex alignItems="center" justifyContent="between" widthMd="4/12">
        <Flex direction="column" directionMd="row" widthMd="full" mrMd="16">
          <Text
            color="eventio.base-light-3"
            fontSize="sm"
            widthMd="9/12"
            mb="2"
            mbMd="0"
            mrMd="4"
            flexNone
          >
            {event.startsAt}
          </Text>

          <Text
            color="eventio.base-light-1"
            fontSize="sm"
            widthMd="10/12"
            flexNone
          >
            {`${event.attendees.length} of ${event.capacity}`}
          </Text>
        </Flex>

        <Button
          size="sm"
          variant={userPossibleAction.buttonColor}
          rounded="eventio.rounded-sm"
          flexNone
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
    </Flex>
  )
}

export default ListItem
