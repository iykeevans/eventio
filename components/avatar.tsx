import React, { useState } from 'react'
import styled from 'styled-components'

import Flex from './styled/Flex'
import Text from './styled/Text'

import Arrow from './arrow.svg'
import Box from './styled/Box'

function Avatar({
  handleLogout,
  userInitials,
  userName,
}: {
  handleLogout: () => void
  userInitials: string
  userName: string
}) {
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <Box position="relative">
      <Flex
        alignItems="center"
        cursor="pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <UserCircle alignItems="center" justifyContent="center">
          <Text fontSize="sm" fontWeight="medium" color="eventio.base-light-1">
            {userInitials}
          </Text>
        </UserCircle>

        <Text
          ml="2.5"
          mr="2.5"
          fontSize="sm"
          fontWeight="medium"
          color="eventio.base-light-1"
        >
          {userName}
        </Text>

        <Arrow />
      </Flex>

      {showDropdown && (
        <DropDown
          as="ul"
          direction="column"
          justifyContent="center"
          position="absolute"
          pl="5"
        >
          <Text
            as="li"
            align="left"
            listStyle="none"
            fontSize="sm"
            color="eventio.base-light-5"
            cursor="pointer"
          >
            Profile
          </Text>

          <Text
            listStyle="none"
            fontSize="sm"
            mt="2.5"
            color="eventio.base-light-5"
            cursor="pointer"
            onClick={handleLogout}
          >
            Logout
          </Text>
        </DropDown>
      )}
    </Box>
  )
}

const UserCircle = styled(Flex)`
  height: 40px;
  width: 40px;
  background: #d9dce1;
  border-radius: 100%;
`

const DropDown = styled(Flex)`
  background: #fff;
  top: 40px;
  right: 0;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.198087);
  border-radius: 14px;
  width: 162px;
  height: 88px;
`

export default Avatar
