import styled from 'styled-components'
import Base from './Base'

interface IGridProps {
  gridCols: string
  gridColsMd: string
}

const Grid = styled(Base)<IGridProps>`
  display: grid;

  grid-template-columns: ${(props) =>
    `repeat(${props.gridCols}, minmax(0, 1fr))`};

  @media (min-width: ${(props) => props.theme.viewports.tablet}) {
    grid-template-columns: ${(props) =>
      `repeat(${props.gridColsMd}, minmax(0, 1fr))`};
  }
`

export default Grid
