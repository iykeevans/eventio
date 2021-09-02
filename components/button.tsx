import React, { ReactNode } from 'react'
import styled from 'styled-components'

import Base from './styled/Base'
import Spinner from './ui-elements/spinner'

interface ButtonProps {
  loading?: boolean
  label?: string
  variant: string
  size: string
  rounded?: string
  children?: ReactNode
  flexNone?: boolean
  onClick?: () => void
}

function Button({
  loading,
  label,
  variant,
  size,
  rounded,
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      {...rest}
      as="button"
      variant={variant}
      size={size}
      cursor="pointer"
      rounded={rounded}
    >
      {loading ? <Spinner /> : children}
    </StyledButton>
  )
}

const StyledButton = styled(Base)<{ variant: string; size: string }>`
  width: ${(props) => props.size && props.theme.buttonSizes[props.size].width};
  height: ${(props) =>
    props.size && props.theme.buttonSizes[props.size].height};
  background-color: ${(props) =>
    props.variant && props.theme.colors[props.variant]};
  color: white;
  border: 0;
  font-weight: 600;
  letter-spacing: 1px;
`

export default Button
