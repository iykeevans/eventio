import React from 'react'
import Spinner from './spinner'
import Flex from '../styled/Flex'

function PageLoader() {
  return (
    <Flex
      height="screen"
      width="full"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner />
    </Flex>
  )
}

export default PageLoader
