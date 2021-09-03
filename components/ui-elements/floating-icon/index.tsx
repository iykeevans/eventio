import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import Flex from '../../styled/Flex'

import Plus from './plus.svg'

interface IFloatingIconProps {
  bgColor: string
  onClick: () => void
}

function FloatingIcon({ bgColor, onClick }: IFloatingIconProps) {
  return (
    <StyledFloatingIcon
      as="button"
      aria-label="floating icon"
      bgColor={bgColor}
      position="fixed"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      onClick={onClick}
    >
      <Plus />
    </StyledFloatingIcon>
  )
}

const StyledFloatingIcon = styled(Flex)`
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  right: 26px;
  bottom: 26px;
  transition: ${(props) => props.theme.transition};
  &:hover {
    background: ${(props) => lighten(0.09, props.theme.colors['eventio.base'])};
  }
`

export default FloatingIcon
