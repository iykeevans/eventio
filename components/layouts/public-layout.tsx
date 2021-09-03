import React, { ReactNode } from 'react'
import styled from 'styled-components'

import Flex from '../styled/Flex'
import Box from '../styled/Box'
import Text from '../styled/Text'

import Logo from '../logo.svg'

function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>
        <Flex
          justifyContent="between"
          ml="auto"
          mr="auto"
          width="10/12"
          widthMd="11/12"
          pl="6"
          plMd="9"
          pt="7"
        >
          <StyledLogo />

          <Text
            as="a"
            display="none"
            displayMd="block"
            fontSize="sm"
            color="eventio.base-light-1"
          >
            Don’t have account?{' '}
            <Text
              as="span"
              display="inline"
              fontWeight="medium"
              fontSize="sm"
              color="eventio.base-light"
            >
              SIGN UP
            </Text>
          </Text>
        </Flex>
      </Header>

      <Flex>
        <Box
          as="aside"
          widthMd="4/12"
          height="screen"
          display="none"
          displayMd="block"
          position="fixed"
          bgImage="/assets/images/bg-image.jpg"
        >
          <Flex
            direction="column"
            justifyContent="end"
            alignItems="center"
            height="full"
            pb="14"
          >
            <Text
              color="eventio.light"
              fontSize="4xl"
              fontFamily="'Playfair Display', serif"
              align="center"
            >
              “Great, kid.Don’t <br />
              get cocky.”
            </Text>

            <Divider />

            <Text color="eventio.base-light" fontSize="lg">
              Han Solo
            </Text>
          </Flex>
        </Box>

        <Box as="section" width="full" widthMd="8/12" ml="auto">
          {children}
        </Box>
      </Flex>
    </>
  )
}

const Header = styled.header`
  left: 0px;
  position: fixed;
  display: flex;
  z-index: 5;
  align-items: center;
`

const Divider = styled.div`
  margin: 1rem auto;
  display: block;
  width: 0.75rem;
  height: 0.125rem;
  background-color: ${(props) => props.theme.colors['eventio.primary']};
`

const StyledLogo = styled(Logo)`
  fill: #323c46;

  @media (min-width: ${(props) => props.theme.viewports.tablet}) {
    fill: #fff;
  }
`

export default PublicLayout
