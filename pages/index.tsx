import type { NextPage } from 'next'
import { ReactNode, useState } from 'react'

import LayoutTwo from '../components/layouts/LayoutTwo'
import Options from '../components/Events/options'
import Flex from '../components/Styled/Flex'
import Grid from '../components/Styled/Grid'

import withSession from '../utils/session'
import ListItem from '../components/Events/list-item'
import CardItem from '../components/Events/card-item'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

const Home: Page = () => {
  const [eventsView, setEventsView] = useState('list')
  const [filterOption, setFilterOption] = useState('ALL EVENTS')

  return (
    <>
      <Options
        eventsView={eventsView}
        setEventsView={setEventsView}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      />

      {eventsView === 'card' && (
        <Grid
          gridColsMd="3"
          gridCols="1"
          width="11/12"
          widthMd="10/12"
          ml="auto"
          mr="auto"
        >
          <CardItem />
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
          <ListItem />
        </Flex>
      )}
    </>
  )
}

Home.getLayout = LayoutTwo

export const getServerSideProps = withSession(async function ({ req, res }) {
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
