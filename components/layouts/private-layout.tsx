import React, { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Flex from '../styled/Flex'
import Text from '../styled/Text'
import Avatar from '../avatar'

import Logo from '../logo.svg'
import Close from '../icon-close.svg'
import { IUser } from '../../utils/types/users'
import { useAuth } from '../../context/auth'
import { ACTIONS } from '../../enums/constants'

function PrivateLayout({
  children,
  user,
}: {
  children: ReactNode
  user?: IUser
}) {
  const router = useRouter()
  const { dispatch } = useAuth()

  useEffect(() => {
    router.prefetch('/auth/sign-in')
  }, [])

  const handleLogout = async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh-token')
    router.push('/auth/sign-in')
    dispatch({ type: ACTIONS.LOGOUT })
  }

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
            <Avatar
              userName={`${user?.firstName} ${user?.lastName}`}
              userInitials={`${user?.firstName[0]} ${user?.lastName[0]}`}
              handleLogout={handleLogout}
            />
          )}
        </Flex>
      </Header>

      {children}
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

const Wrapper = styled.div`
  background: #f9f9fb;
  min-height: 100vh;
  padding-bottom: 50px;
`

export default PrivateLayout
