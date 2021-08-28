import type { NextPage } from 'next'
import { ReactNode, useState } from 'react'
import styled from 'styled-components'

import LayoutTwo from '../../components/layouts/LayoutTwo'
import Box from '../../components/Styled/Box'
import Text from '../../components/Styled/Text'
import Flex from '../../components/Styled/Flex'
import Grid from '../../components/Styled/Grid'

import GridView from '../../components/Events/GridView.svg'
import ListView from '../../components/Events/ListView.svg'
import User from '../../components/Events/User.svg'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

const Home: Page = () => {
  const [eventsView, setEventsView] = useState('card')

  const [attendees, setAttendees] = useState([
    'Luis Pope',
    'Dustin Fox',
    'Adelaide Barrett',
    'Shawn Larson',
    'Franklin Harrison',
  ])

  return (
    <>
      <Box width="11/12" widthMd="10/12" ml="auto" mr="auto">
        <Text mb="10" mt="20">
          Detail event: #5878c5145f94d3001c1469c5
        </Text>
      </Box>

      {eventsView === 'card' && (
        <Grid
          gridColsMd="12"
          gridCols="1"
          colGap="4"
          width="11/12"
          widthMd="10/12"
          ml="auto"
          mr="auto"
        >
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

              <Button>EDIT</Button>
            </Flex>
          </EventGridCard>

          <EventAttendees pl="6" pr="6" pb="5" pt="5">
            <Text color="eventio.base" fontSize="2xl" mb="5">
              Attendees
            </Text>

            <Flex wrap>
              {attendees.map((attendee, index) => (
                <EventAttendee
                  pl="5"
                  pr="5"
                  pt="2.5"
                  pb="2.5"
                  mb="3"
                  mr="3"
                  key={index}
                  color="eventio.base-light-1"
                >
                  {attendee}
                </EventAttendee>
              ))}
            </Flex>
          </EventAttendees>
        </Grid>
      )}
    </>
  )
}

Home.getLayout = LayoutTwo

const EventGridCard = styled(Box)`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  background: white;
  grid-column: span 7 / span 7;
`

const EventAttendees = styled(Box)`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  background: white;
  grid-column: span 5 / span 5;
`

const EventAttendee = styled(Text)`
  background: #d9dce1;
  border-radius: 100px;
  column-gap: 100px;
`

const Button = styled.button`
  width: 100px;
  border: 0;
  height: 32px;
  background: #d9dce1;
  color: #a9aeb4;
  font-weight: 600;
  border-radius: 4px;
`

export default Home
