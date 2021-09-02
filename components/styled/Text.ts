import styled from 'styled-components'

import Base from './Base'
import { ITheme, colors } from '../../theme'

const textSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '2.5xl': '1.7rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
}

interface ITextProps {
  theme: ITheme
  fontSize?: keyof typeof textSizes
  fontSizeMd?: keyof typeof textSizes
  color?: keyof typeof colors
  align?: string
  alignMd?: string
  fontWeight?: keyof typeof fontWeights
  fontFamily?: string
  letterSpacing?: string
}

const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}

const Text = styled(Base)<ITextProps>`
  font-size: ${(props) =>
    props.fontSize ? textSizes[props.fontSize] : textSizes.base};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  letter-spacing: ${(props) => props.letterSpacing && props.letterSpacing};
  font-weight: ${(props) =>
    props.fontWeight ? fontWeights[props.fontWeight] : fontWeights.regular};
  color: ${(props) => props.color && props.theme.colors[props.color]};
  font-family: ${(props) => props.fontFamily && props.fontFamily};

  @media (min-width: ${(props) => props.theme.viewports.tablet}) {
    text-align: ${(props) => props.alignMd && props.alignMd};
    font-size: ${(props) => props.fontSizeMd && textSizes[props.fontSizeMd]};
  }
`

export default Text
