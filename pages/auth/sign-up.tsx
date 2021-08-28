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

const SignUp: Page = () => {
  return (
    <Box
      ml="auto"
      mr="auto"
      mt="0"
      mb="0"
      widthMd="6/12"
      width="10/12"
      pt="40"
      pb="10"
    >
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
        Get started absolutely free.
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
        <Input label="First name" mb="7" />

        <Input label="Last name" mb="7" />

        <Input label="Email" mb="7" />

        <Input label="Password" mb="7" />

        <Input label="Repeat Password" />

        <Text
          fontSize="sm"
          align="center"
          alignMd="left"
          displayMd="none"
          mt="7"
          color="eventio.base-light-1"
        >
          Already have an account?{' '}
          <Text
            as="span"
            fontSize="sm"
            fontWeight="medium"
            color="eventio.base-light"
          >
            SIGN IN
          </Text>
        </Text>

        <Flex justifyCenter justifyStartMd mt="10">
          <Button as="button" primary>
            SIGN IN
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

SignUp.getLayout = Public

export default SignUp
