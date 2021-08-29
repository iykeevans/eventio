import styled from 'styled-components'

import Base from './Base'

interface IButtonProps {
  variant: string
  size: string
}

const Button = styled(Base)<IButtonProps>`
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
