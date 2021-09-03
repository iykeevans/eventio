import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import PublicLayout from '../components/layouts/public-layout'
import Box from '../components/styled/Box'
import Flex from '../components/styled/Flex'
import Text from '../components/styled/Text'
import Button from '../components/button'

function Custom404() {
  const router = useRouter()

  return (
    <PublicLayout>
      <Head>
        <title>Eventio - 404</title>
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
            404 Error - page not found
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
              onClick={() => router.back()}
            >
              REFRESH
            </Button>
          </Flex>
        </Box>
      </Flex>
    </PublicLayout>
  )
}

export default Custom404
