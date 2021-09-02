import styled from 'styled-components'

import Base from './Base'

interface IBoxProps {}

const Box = styled(Base)<IBoxProps>`
  @media (min-width: ${(props) => props.theme.viewports.tablet}) {
  }
`

export default Box
