import React, { useState, ReactNode, useRef } from 'react'
import styled from 'styled-components'

import Text from '../styled/Text'
import Flex from '../styled/Flex'
import Box from '../styled/Box'
import { useOuterClick } from '../../custom-hooks/use-outer-clicks'

function DropDown({
  children,
  options,
  setOption,
  top,
  right,
}: {
  children: ReactNode
  options: string[]
  setOption: (value: string) => void
  top?: string
  right?: string
}) {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)

  useOuterClick(dropdownRef, () => {
    if (showDropdown) {
      setShowDropdown(false)
    }
  })
  return (
    <Box
      position="relative"
      aria-haspopup="true"
      aria-expanded={showDropdown ? 'true' : 'false'}
    >
      <div onClick={() => setShowDropdown(!showDropdown)}>{children}</div>

      {showDropdown && (
        <DropDownWrapper
          top={top}
          right={right}
          ref={dropdownRef}
          as="ul"
          direction="column"
          justifyContent="center"
          position="absolute"
          pl="5"
          pt="3"
          pb="5"
        >
          {options.map((option, index) => (
            <StyledText
              key={index}
              as="li"
              align="left"
              listStyle="none"
              mt="2.5"
              fontSize="sm"
              color="eventio.base-light-5"
              cursor="pointer"
              onClick={() => setOption(option)}
            >
              {option}
            </StyledText>
          ))}
        </DropDownWrapper>
      )}
    </Box>
  )
}

const DropDownWrapper = styled(Flex)<{ top?: string; right?: string }>`
  background: #fff;
  top: ${(props) => (props.top ? props.top : '15px')};
  ${(props) => (props.right ? `right: ${props.right}` : `left: 0`)};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.198087);
  border-radius: 14px;
  width: 162px;
`

const StyledText = styled(Text)`
  transition: ${(props) => props.theme.transition};

  &:hover {
    background: ${(props) => props.theme.colors['eventio.base']};
  }
`

export default DropDown
