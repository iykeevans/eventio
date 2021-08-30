import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useAuth, AuthLoader } from '../../store/auth-context'
import Flex from '../Styled/Flex'
import Text from '../Styled/Text'

import Logo from '../Logo.svg'
import Close from '../icon-close.svg'

function LayoutTwo(page: ReactNode) {
  const router = useRouter()
  const {
    state: { isLoggedIn },
  } = useAuth()

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.replace('/auth/sign-in')
  //   }
  // }, [])

  // if (!isLoggedIn) return <AuthLoader />

  return (
    <Wrapper>
      <Header>
        <Flex
          width="10/12"
          widthMd="11/12"
          ml="auto"
          mr="auto"
          alignItems="center"
          justifyContent="between"
        >
          <StyledLogo />

          {router.pathname.includes('new') ? (
            <Flex
              as="button"
              alignItems="center"
              cursor="pointer"
              border="none"
              onClick={() => router.push('/')}
            >
              <Close />
              <Text display="none" displayMd="block" as="span" ml="3">
                Close
              </Text>
            </Flex>
          ) : (
            <Avatar />
          )}
        </Flex>
      </Header>

      {page}
    </Wrapper>
  )
}

const StyledLogo = styled(Logo)`
  fill: #323c46;
`

const Header = styled.header`
  left: 0px;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
`

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  background: #d9dce1;
  border-radius: 100%;
`

const Wrapper = styled.div`
  background: #f9f9fb;
  min-height: 100vh;
`

export default LayoutTwo
