import React, { SyntheticEvent } from 'react'
import styled from 'styled-components'

import Base, { spacing } from './styled/Base'

interface IInputProps {
  label: string
  type?: string
  mt?: keyof typeof spacing
  hasError?: boolean
  value?: string
  id?: string
  name?: string

  onChange?: (event: SyntheticEvent) => void
  onBlur?: (event: SyntheticEvent) => void
}

function Input({
  label,
  id,
  name,
  type = 'text',
  value,
  hasError,
  onChange,
  onBlur,
  ...rest
}: IInputProps) {
  return (
    <InputGroup {...rest}>
      <StyledInput
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className="highlight"></span>
      <InputBar className="bar" hasError={hasError}></InputBar>
      <Label htmlFor={name}>{label}</Label>
    </InputGroup>
  )
}

const InputGroup = styled(Base)`
  position: relative;
`

const StyledInput = styled.input`
  background: none;
  color: #323c46;
  font-size: 18px;
  padding: 10px 10px 10px 0px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #dae1e7;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    top: -10px;
    font-size: 14px;
    color: #d2d6da;
  }

  &:focus ~ .bar:before {
    width: 100%;
  }

  ${(props) =>
    props.value &&
    `~ label {
    top: -10px;
    font-size: 14px;
    color: #d2d6da;
  }`}

  ${(props) => props.type === 'password' && `letter-spacing: 3.4px;`}
`

const InputBar = styled.span<{ hasError?: boolean }>`
  position: relative;
  display: block;
  width: 100%;

  &:before {
    content: '';
    height: 2px;
    width: ${(props) => (props.hasError ? '100%' : '0')};
    bottom: 0px;
    position: absolute;
    background: ${(props) =>
      props.hasError
        ? props.theme.colors['eventio.danger']
        : props.theme.colors['eventio.primary']};
    transition: 300ms ease all;
    left: 0%;
  }
`

const Label = styled.label`
  color: #c9ced3;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 20px;
  transition: 300ms ease all;
`

export default Input
