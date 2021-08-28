import type { NextPage } from 'next'
import { ReactNode, useState } from 'react'
import styled from 'styled-components'

import LayoutTwo from '../components/layouts/LayoutTwo'
import Box from '../components/Styled/Box'
import Text from '../components/Styled/Text'
import Flex from '../components/Styled/Flex'
import Grid from '../components/Styled/Grid'

import GridView from '../components/Events/GridView.svg'
import ListView from '../components/Events/ListView.svg'
import User from '../components/Events/User.svg'
// import Button from '../components/Styled/Button'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

const Home: Page = () => {
  const [eventsView, setEventsView] = useState('card')

  return (
    <>
      <Flex
        width="10/12"
        mt="10"
        ml="auto"
        mr="auto"
        justifyContent="between"
        alignItems="center"
        mb="10"
      >
        <Box>
          <Text fontSize="sm">SHOW: ALL EVENTS</Text>
        </Box>

        <Box>
          <StyledGridView mr="5" />
          <ListView />
        </Box>
      </Flex>

      {eventsView === 'card' && (
        <Grid
          gridColsMd="3"
          gridCols="1"
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
        </Grid>
      )}

      {eventsView === 'list' && (
        <Flex
          direction="column"
          width="11/12"
          widthMd="10/12"
          ml="auto"
          mr="auto"
        >
          <Flex
            direction="column"
            directionMd="row"
            alignItemsMd="center"
            justifyContentMd="between"
            bgColor="eventio.light"
            rounded="eventio.radius"
            shadow="eventio.shadow"
            pl="5"
            pr="5"
            pt="5"
            pb="5"
          >
            <Text color="eventio.base" fontSize="2xl" fontSizeMd="lg">
              How to get angry
            </Text>

            <Text color="eventio.base-light-1" mb="5" mbMd="0">
              I will show you how to get angry...
            </Text>

            <Text color="eventio.base-light" display="none" displayMd="block">
              Tom Watts
            </Text>

            <Flex alignItems="center" justifyContent="between">
              <Flex direction="column" directionMd="row" mrMd="16">
                <Text color="eventio.base-light-3" mb="2" mbMd="0" mrMd="10">
                  April 4, 2017 – 2:17 PM
                </Text>

                <Text color="eventio.base-light-1">9 of 31</Text>
              </Flex>

              <Button>EDIT</Button>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  )
}

Home.getLayout = LayoutTwo

const EventGridCard = styled(Box)`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  background: white;
`

const EventListCard = styled(Box)`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  background: white;
`

const StyledGridView = styled(GridView)`
  margin-right: 1rem;
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
