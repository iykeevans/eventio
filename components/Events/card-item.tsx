import styled from 'styled-components'

import Flex from '../Styled/Flex'
import Text from '../Styled/Text'
import Box from '../Styled/Box'
import Button from '../Button'

import User from './User.svg'

function CardItem() {
  return (
    <EventGridCard pl="5" pr="5" pt="9" pb="9">
      <Text color="eventio.base-light-3" mb="6">
        April 4, 2017 – 2:17 PM
      </Text>

      <Text color="eventio.base" fontSize="2xl">
        How to get angry
      </Text>

      <Text color="eventio.base-light" mb="8">
        Tom Watts
      </Text>

      <Text color="eventio.base-light-1" mb="10">
        I will show you how to get angry in a second
      </Text>

      <Flex alignItems="center" justifyContent="between">
        <Flex alignItems="center">
          <User />
          <Text ml="3" color="eventio.base-light-1">
            9 of 31
          </Text>
        </Flex>

        <Button
          fontSize="base"
          fontSizeMd="sm"
          size="sm"
          variant="eventio.disabled"
        >
          EDIT
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
