export const colors = {
  'eventio.light': '#fff',
  'eventio.base': '#323C46',
  'eventio.base-light': '#949EA8',
  'eventio.base-light-1': '#C9CED3',
  'eventio.primary': '#22D486',
}

const viewports = {
  tablet: '769px',
  desktop: '1024px',
}

const theme: ITheme = {
  colors,
  viewports,
}

export interface ITheme {
  colors: IColors
  viewports: IViewports
}

interface IColors {
  'eventio.light': string
  'eventio.base': string
  'eventio.base-light': string
  'eventio.base-light-1': string
  'eventio.primary': string
}

interface IViewports {
  tablet: string
  desktop: string
}

export default theme
