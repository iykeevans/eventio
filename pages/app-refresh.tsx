import React from 'react'
import Head from 'next/head'

import PublicLayout from '../components/layouts/public-layout'
import Box from '../components/styled/Box'
import Flex from '../components/styled/Flex'
import Text from '../components/styled/Text'
import Button from '../components/button'
import { refreshToken } from '../services/auth-api'
import { useAuth } from '../context/auth'
import { ACTIONS } from '../enums/constants'
import router from 'next/router'

function AppRefresh() {
  const { dispatch } = useAuth()

  const handleRefresh = async () => {
    try {
      const data = await refreshToken()
      console.log(data)
      if (data) {
        dispatch({ type: ACTIONS.LOGIN, payload: data })
        router.replace('/')
      } else {
        router.replace('/auth/sign-in')
      }
    } catch (err) {
      console.log(err)
      if (err?.message.includes('400')) {
        router.replace('/auth/sign-in')
      }
    }
  }

  return (
    <PublicLayout>
      <Head>
        <title>Eventio - App Refresh</title>
      </Head>

      <Flex
        as="main"
        alignItems="center"
        justifyContent="center"
        height="screen"
      >
        <Box widthMd="7/12" width="10/12">
          <Text
            as="h1"
            fontSize="2xl"
            fontSizeMd="2.5xl"
            align="center"
            alignMd="left"
            mt="0"
            mb="2"
            color="eventio.base"
          >
            Something went wrong.
          </Text>

          <Text
            as="p"
            fontSize="sm"
            fontSizeMd="lg"
            align="center"
            alignMd="left"
            mt="0"
            mb="0"
            color="eventio.base-light-1"
          >
            Seems like Darth Vader just hits our website and drops it down.
            Please press the refresh button and everything should be fine again.
          </Text>

          <Flex
            justifyContent="center"
            justifyContentMd="start"
            mt="10"
            mtMd="14"
          >
            <Button
              label="SIGN IN"
              variant="eventio.base"
              rounded="eventio.rounded-sm"
              size="lg"
              onClick={handleRefresh}
            >
              REFRESH
            </Button>
          </Flex>
        </Box>
      </Flex>
    </PublicLayout>
  )
}

export default AppRefresh
