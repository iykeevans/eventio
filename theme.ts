export const colors = {
  'eventio.light': '#fff',
  'eventio.base': '#323C46',
  'eventio.base-light': '#7D7878',
  'eventio.base-light-1': '#949EA8',
  'eventio.base-light-2': '#C9CED3',
  'eventio.base-light-3': '#CACDD0',
  'eventio.disabled': '#D9DCE1',
  'eventio.danger': '#FF4081',
  'eventio.primary': '#22D486',
}

const viewports = {
  tablet: '769px',
  desktop: '1024px',
}

const boxShadows = {
  'eventio.shadow': 'box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696)',
}

const radius = {
  'eventio.radius': '2px',
}

const theme: ITheme = {
  colors,
  viewports,
  boxShadows,
  radius,
}

export interface ITheme {
  colors: IColors
  viewports: IViewports
  boxShadows: IBoxShadows
  radius: IRadius
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
interface IBoxShadows {
  'eventio.shadow': string
}

interface IRadius {
  'eventio.radius': string
}

export default theme
