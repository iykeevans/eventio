import styled from 'styled-components'
import Base from './Base'

interface FlexIProps {
  direction?: string
  directionMd?: string
  wrap?: boolean

  alignItems?: keyof typeof flexDisplays
  alignItemsMd?: keyof typeof flexDisplays

  justifyContent?: keyof typeof flexDisplays
  justifyContentMd?: keyof typeof flexDisplays
}

interface IFlexDisplays {
  center: string
  between: string
  around: string
  even: string
  start: string
  end: string
}

const flexDisplays: IFlexDisplays = {
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  even: 'space-even',
  start: 'flex-start',
  end: 'flex-end',
}

const Flex = styled(Base)<FlexIProps>`
  display: flex;
  flex-direction: ${(props) => props.direction && props.direction};
  align-items: ${(props) => props.alignItems && flexDisplays[props.alignItems]};
  justify-content: ${(props) =>
    props.justifyContent && flexDisplays[props.justifyContent]};
  flex-wrap: ${(props) => props.wrap && 'wrap'};

  @media (min-width: ${(props) => props.theme.viewports.tablet}) {
    flex-direction: ${(props) => props.directionMd && props.directionMd};
    justify-content: ${(props) =>
      props.justifyContentMd && flexDisplays[props.justifyContentMd]};
    align-items: ${(props) =>
      props.alignItemsMd && flexDisplays[props.alignItemsMd]};
  }
`

export default Flex
