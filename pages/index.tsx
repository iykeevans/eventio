import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { fetchEvents, leaveEvent, joinEvent } from '../services/events-api'

import PrivateLayout from '../components/layouts/private-layout'
import Options from '../components/events/options'
import Flex from '../components/styled/Flex'
import Grid from '../components/styled/Grid'
import Box from '../components/styled/Box'
import ListItem from '../components/events/list-item'
import CardItem from '../components/events/card-item'
import Spinner from '../components/ui-elements/spinner'
import FloatingIcon from '../components/ui-elements/floating-icon'
import { IEvent } from '../utils/types/events'

import { removeAttendee, addAttendee } from '../utils/attendance-manager'
import { useAuth } from '../context/auth'
import useFetchUser from '../custom-hooks/use-fetch-user'
import PageLoader from '../components/ui-elements/page-loader'
import useFilter from '../custom-hooks/use-filter'

const Home = () => {
  const router = useRouter()
  const { state: user } = useAuth()
  const { loading: appLoading } = useFetchUser()

  const [loading, setLoading] = useState<boolean>(true)
  const [events, setEvents] = useState<IEvent[]>([])
  const [eventsView, setEventsView] = useState<string>('list')
  const [filterOption, setFilterOption] = useState<string>('ALL EVENTS')

  useEffect(() => {
    fetchEvents()
      .then((response) => {
        setEvents(response)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  const filteredEvents = useFilter(filterOption, events)

  const handleUserAction = async (actionType: string, eventId: string) => {
    try {
      if (actionType === 'canLeave') {
        setEvents(removeAttendee(user.id, eventId, events))
        await leaveEvent(eventId)
        return
      }

      if (actionType === 'canJoin') {
        setEvents(addAttendee(user, eventId, events))
        await joinEvent(eventId)
        return
      }
    } catch (err) {
      console.log(err)
    }
  }
  if (appLoading) return <PageLoader />

  return (
    <PrivateLayout user={user}>
      <Head>
        <title>Eventio - All Events</title>
      </Head>

      <FloatingIcon
        bgColor="eventio.base"
        onClick={() => router.push('/events/new')}
      />

      <Options
        eventsView={eventsView}
        setEventsView={setEventsView}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      />

      {loading ? (
        <Flex justifyContent="center" pt="40">
          <Spinner />
        </Flex>
      ) : (
        <Box as="main">
          <Box>
            {eventsView === 'card' && (
              <Grid
                tabIndex={0}
                id={`${eventsView}-tab`}
                aria-labelledby={eventsView}
                gridColsMd="3"
                gridCols="1"
                rowGap="4"
                colGap="4"
                width="11/12"
                widthMd="10/12"
                ml="auto"
                mr="auto"
              >
                {filteredEvents.map((event) => (
                  <CardItem
                    key={event.id}
                    event={event}
                    userId={user.id}
                    handleUserAction={handleUserAction}
                  />
                ))}
              </Grid>
            )}

            {eventsView === 'list' && (
              <Flex
                tabIndex={0}
                id={`${eventsView}-tab`}
                aria-labelledby={eventsView}
                direction="column"
                width="11/12"
                widthMd="10/12"
                ml="auto"
                mr="auto"
              >
                {filteredEvents.map((event) => (
                  <ListItem
                    key={event.id}
                    event={event}
                    userId={user.id}
                    handleUserAction={handleUserAction}
                  />
                ))}
              </Flex>
            )}
          </Box>
        </Box>
      )}
    </PrivateLayout>
  )
}

export default Home
