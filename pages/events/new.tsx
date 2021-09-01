import type { NextPage } from 'next'
import React from 'react'

import PrivateLayout from '../../components/layouts/private-layout'
import Text from '../../components/styled/Text'
import Flex from '../../components/styled/Flex'
import Input from '../../components/input-field'
import Button from '../../components/styled/Button'

// import {} from '../'

const NewEvent: NextPage = () => {
  return (
    <PrivateLayout>
      <Flex as="main" justifyContent="center" ptMd="20" pb="16">
        <Flex
          as="form"
          direction="column"
          bgColor="eventio.light"
          shadow="eventio.shadow"
          rounded="eventio.rounded"
          widthMd="4/12"
          width="11/12"
          pl="8"
          pr="8"
          pb="8"
          pt="8"
        >
          <Text
            as="h1"
            fontSize="2xl"
            fontSizeMd="2.5xl"
            align="center"
            mt="0"
            mb="1"
            color="eventio.base"
          >
            Create new event
          </Text>

          <Text
            as="h4"
            fontSize="sm"
            fontSizeMd="lg"
            align="center"
            mt="0"
            mb="7"
            color="eventio.base-light-1"
          >
            Enter your details below.
          </Text>

          <Input label="Title" />

          <Input label="Description" mt="5" />

          <Input label="Date" mt="5" />

          <Input label="Time" mt="5" />

          <Input label="Capacity" mt="5" />

          <Flex justifyContent="center" mt="6" mtMd="9">
            <Button
              as="button"
              variant="eventio.primary"
              size="lg"
              rounded="eventio.rounded-sm"
            >
              CREATE NEW EVENT
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </PrivateLayout>
  )
}

export default NewEvent
