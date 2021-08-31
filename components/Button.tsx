import { ReactNode } from 'react'
import styled from 'styled-components'

import Base from './Styled/Base'

import Spinner from './spinner.svg'

interface ButtonProps {
  loading?: boolean
  label?: string
  variant: string
  size: string
  rounded?: string
  fontSizeMd?: string
  fontSize?: string
  children?: ReactNode
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
      {loading ? <StyledSpinner /> : children}
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

const StyledSpinner = styled(Spinner)`
  animation: spin 2s linear infinite;
  display: inline-block;
  color: black;
  max-height: 65%;
  height: 3rem;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`

export default Button
