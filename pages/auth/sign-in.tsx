import type { NextPage } from 'next'
import { ReactNode } from 'react'

import Public from '../../components/layouts/Public'
import Input from '../../components/Input'
import Flex from '../../components/Styled/Flex'
import Text from '../../components/Styled/Text'
import Box from '../../components/Styled/Box'
import Button from '../../components/Styled/Button'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

const SignIn: Page = () => {
  return (
    <Flex itemsCenter justifyCenter height="screen">
      <Box widthMd="6/12" width="10/12">
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
          Sign in to Eventio.
        </Text>

        <Text
          as="h4"
          fontSize="sm"
          fontSizeMd="lg"
          align="center"
          alignMd="left"
          mt="0"
          mb="10"
          color="eventio.base-light"
        >
          Enter your details below.
        </Text>

        <Flex as="form" direction="column">
          <Input label="Email" mb="7" />

          <Input label="Password" />

          <Text
            as="span"
            fontSize="sm"
            align="center"
            alignMd="left"
            displayMd="none"
            mt="7"
            color="eventio.base-light-1"
          >
            Don’t have account?{' '}
            <Text
              as="span"
              fontSize="sm"
              fontWeight="medium"
              color="eventio.base-light"
            >
              SIGN UP
            </Text>
          </Text>

          <Flex justifyCenter justifyStartMd mt="10" mtMd="14">
            <Button as="button" primary>
              SIGN IN
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

SignIn.getLayout = Public

export default SignIn
