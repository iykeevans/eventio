import styled from 'styled-components'

import Base from './Base'

interface IButtonProps {
  primary: boolean
}

const Button = styled(Base)<IButtonProps>`
  width: 240px;
  height: 57px;
  background-color: ${(props) =>
    props.primary && props.theme.colors['eventio.primary']};
  color: white;
  border-radius: 4px;
  border: 0;
  font-weight: 600;
`

export default Button
