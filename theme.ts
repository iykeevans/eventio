interface IColors {
  'eventio.light': string
  'eventio.base': string
  'eventio.base-light': string
  'eventio.base-light-1': string
  'eventio.base-light-2': string
  'eventio.base-light-3': string
  'eventio.base-light-4': string
  'eventio.base-light-5': string
  'eventio.primary': string
  'eventio.disabled': string
  'eventio.danger': string
}

export const colors = {
  'eventio.light': '#fff',
  'eventio.base': '#323C46',
  'eventio.base-light': '#7D7878',
  'eventio.base-light-1': '#949EA8',
  'eventio.base-light-2': '#C9CED3',
  'eventio.base-light-3': '#CACDD0',
  'eventio.base-light-4': '#A9AEB4',
  'eventio.base-light-5': '#9CA5AF',
  'eventio.disabled': '#D9DCE1',
  'eventio.danger': '#FF4081',
  'eventio.primary': '#22D486',
}

interface IViewports {
  tablet: string
  desktop: string
}

const viewports = {
  tablet: '769px',
  desktop: '1024px',
}

interface IBoxShadows {
  'eventio.shadow': string
}

const boxShadows = {
  'eventio.shadow': '0px 2px 3px rgba(0, 0, 0, 0.108696)',
}

interface IRadiuses {
  'eventio.rounded': string
  'eventio.rounded-sm': string
}

const radiuses = {
  'eventio.rounded': '2px',
  'eventio.rounded-sm': '4px',
}

interface IButtonSizes {
  sm: { height: string; width: string }
  lg: { height: string; width: string }
}

const buttonSizes = {
  sm: { height: '32px', width: '100px' },
  lg: { height: '57px', width: '240px' },
}

const transition = 'all .1s ease-in-out'

export interface ITheme {
  colors: IColors
  viewports: IViewports
  boxShadows: IBoxShadows
  radiuses: IRadiuses
  buttonSizes: IButtonSizes
  transition: string
}

const theme: ITheme = {
  colors,
  viewports,
  boxShadows,
  radiuses,
  buttonSizes,
  transition,
}

export default theme
