import styled from 'styled-components'
import Base from './Base'

interface FlexIProps {
  direction?: string
  itemsCenter?: boolean
  itemsEnd?: boolean
  justifyCenter?: boolean
  justifyEnd?: boolean
  justifyBetween?: boolean
  justifyStartMd?: boolean
}

const alignItemsHandler = (props: FlexIProps): string => {
  if (props.itemsCenter) return 'center'
  if (props.itemsEnd) return 'flex-end'
  return ''
}

const justifyContentHandler = (props: FlexIProps): string => {
  if (props.justifyCenter) return 'center'
  if (props.justifyEnd) return 'flex-end'
  if (props.justifyBetween) return 'space-between'
  return ''
}

const Flex = styled(Base)<FlexIProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'flex')};
  align-items: ${(props) => alignItemsHandler(props)};
  justify-content: ${(props) => justifyContentHandler(props)};

  @media (min-width: ${(props) => props.theme.viewports.tablet}) {
    justify-content: ${(props) => props.justifyStartMd && 'start'};
  }
`

export default Flex
