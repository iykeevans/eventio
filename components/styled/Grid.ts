import styled from 'styled-components'
import Base, { spacing } from './Base'

interface IGridProps {
  gridCols: string
  gridColsMd?: string
  colGap?: keyof typeof spacing
  colGapMd?: keyof typeof spacing
  rowGap?: keyof typeof spacing
  rowGapMd?: keyof typeof spacing
}

const Grid = styled(Base)<IGridProps>`
  display: grid;

  grid-template-columns: ${(props) =>
    `repeat(${props.gridCols}, minmax(0, 1fr))`};

  column-gap: ${(props) => props.colGap && spacing[props.colGap]};

  row-gap: ${(props) => props.rowGap && spacing[props.rowGap]};

  @media (min-width: ${(props) => props.theme.viewports.tablet}) {
    grid-template-columns: ${(props) =>
      `repeat(${props.gridColsMd}, minmax(0, 1fr))`};

    column-gap: ${(props) => props.colGapMd && spacing[props.colGapMd]};

    row-gap: ${(props) => props.rowGapMd && spacing[props.rowGapMd]};
  }
`

export default Grid
