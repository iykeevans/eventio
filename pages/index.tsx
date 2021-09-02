import React, { useState, useEffect } from 'react'
import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../utils/session'
import { fetchEvents, leaveEvent, joinEvent } from '../services/events-api'

import PrivateLayout from '../components/layouts/private-layout'
import Options from '../components/events/options'
import Flex from '../components/styled/Flex'
import Grid from '../components/styled/Grid'
import ListItem from '../components/events/list-item'
import CardItem from '../components/events/card-item'
import Spinner from '../components/ui-elements/spinner'
import { IEvent } from '../utils/types/events'
import { IUser } from '../utils/types/users'

import { removeAttendee, addAttendee } from '../utils/attendance-manager'

const Home = ({ user }: { user: IUser }) => {
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

  return (
    <PrivateLayout>
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
        <>
          {eventsView === 'card' && (
            <Grid
              gridColsMd="3"
              gridCols="1"
              rowGap="4"
              colGap="4"
              width="11/12"
              widthMd="10/12"
              ml="auto"
              mr="auto"
            >
              {events.map((event) => (
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
              direction="column"
              width="11/12"
              widthMd="10/12"
              ml="auto"
              mr="auto"
            >
              {events.map((event) => (
                <ListItem
                  key={event.id}
                  event={event}
                  userId={user.id}
                  handleUserAction={handleUserAction}
                />
              ))}
            </Flex>
          )}
        </>
      )}
    </PrivateLayout>
  )
}

interface IWithSessionArgs {
  req: NextApiRequest & { session: Session }
  res: NextApiResponse
}

export const getServerSideProps = withSession(async function ({
  req,
  res,
}: IWithSessionArgs) {
  const user = req.session.get('user')

  if (!user) {
    res.setHeader('location', '/auth/sign-in')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  return {
    props: { user: req.session.get('user') || null },
  }
})

export default Home
