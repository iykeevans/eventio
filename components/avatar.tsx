import React from 'react'
import styled from 'styled-components'

import Flex from './styled/Flex'
import Text from './styled/Text'
import DropDown from './ui-elements/drop-down'

import Arrow from './arrow.svg'

function Avatar({
  handleLogout,
  userInitials,
  userName,
}: {
  handleLogout: () => void
  userInitials: string
  userName: string
}) {
  const optionHandler = (option: string) => {
    if (option === 'Logout') {
      handleLogout()
      return
    }
  }

  return (
    <DropDown
      options={['Profile', 'Logout']}
      setOption={optionHandler}
      top="40px"
      right="0"
    >
      <Flex alignItems="center" cursor="pointer">
        <UserCircle alignItems="center" justifyContent="center" mr="2.5">
          <Text fontSize="sm" fontWeight="medium" color="eventio.base-light-1">
            {userInitials || 'D D'}
          </Text>
        </UserCircle>

        <Text
          mr="2.5"
          fontSize="sm"
          fontWeight="medium"
          display="none"
          displayMd="block"
          color="eventio.base-light-1"
        >
          {userName || 'dum dum'}
        </Text>

        <Arrow />
      </Flex>
    </DropDown>
  )
}

const UserCircle = styled(Flex)`
  height: 40px;
  width: 40px;
  background: #d9dce1;
  border-radius: 100%;
`

export default Avatar
