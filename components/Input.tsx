import styled from 'styled-components'
import Base, { spacing } from './Styled/Base'

interface IInputProps {
  label: string
  type?: string
  mb?: keyof typeof spacing
}

function Input({ label, type = 'text', ...rest }: IInputProps) {
  return (
    <InputGroup {...rest}>
      <StyledInput type={type} required />
      <span className="highlight"></span>
      <InputBar className="bar"></InputBar>
      <Label>{label}</Label>
    </InputGroup>
  )
}

const InputGroup = styled(Base)`
  position: relative;
`

const StyledInput = styled.input`
  background: none;
  color: #c6c6c6;
  font-size: 18px;
  padding: 10px 10px 10px 0px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #c6c6c6;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    top: -10px;
    font-size: 14px;
    color: #2196f3;
  }

  &:valid ~ label {
    top: -10px;
    font-size: 14px;
    color: #2196f3;
  }

  &:focus ~ .bar:before {
    width: 100%;
  }
`

const InputBar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &:before {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: #2196f3;
    transition: 300ms ease all;
    left: 0%;
  }
`

const Label = styled.label`
  color: #c6c6c6;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 20px;
  transition: 300ms ease all;
`

// const def = styled.input`
//   input:focus {
//     outline: none;
//   }

//   input:focus ~ label,
//   input:valid ~ label {
//     top: -14px;
//     font-size: 12px;
//     color: #2196f3;
//   }

//   input:focus ~ .bar:before {
//     width: 320px;
//   }

//   input[type='password'] {
//     letter-spacing: 0.3em;
//   }

//   label {
//     color: #c6c6c6;
//     font-size: 16px;
//     font-weight: normal;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 10px;
//     transition: 300ms ease all;
//   }

//   .bar {
//     position: relative;
//     display: block;
//     width: 320px;
//   }

//   .bar:before {
//     content: '';
//     height: 2px;
//     width: 0;
//     bottom: 0px;
//     position: absolute;
//     background: #2196f3;
//     transition: 300ms ease all;
//     left: 0%;
//   }
// `

export default Input
