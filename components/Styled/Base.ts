import styled from 'styled-components'

export const spacing = {
  auto: 'auto',
  '0': '0px',
  '1': '1px',
  '2': '0.25rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
}

const perimiters = {
  full: '100%',
  screen: '100vh',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
}

interface IBaseProps {
  mt?: keyof typeof spacing
  mb?: keyof typeof spacing
  ml?: keyof typeof spacing
  mr?: keyof typeof spacing
  pt?: keyof typeof spacing
  pb?: keyof typeof spacing
  pl?: keyof typeof spacing
  pr?: keyof typeof spacing
  mtMd?: keyof typeof spacing
  mbMd?: keyof typeof spacing
  mlMd?: keyof typeof spacing
  mrMd?: keyof typeof spacing
  ptMd?: keyof typeof spacing
  pbMd?: keyof typeof spacing
  plMd?: keyof typeof spacing
  prMd?: keyof typeof spacing
  width?: keyof typeof perimiters
  height?: keyof typeof perimiters
  widthMd?: keyof typeof perimiters
  display?: string
  displayMd?: string
  position?: string
  bgImage?: string
  bgColor?: string
  rounded?: string
  shadow?: string
}

const Base = styled.div<IBaseProps>`
  margin-top: ${(props) => props.mt && spacing[props.mt]};
  margin-bottom: ${(props) => props.mb && spacing[props.mb]};
  margin-left: ${(props) => props.ml && spacing[props.ml]};
  margin-right: ${(props) => props.mr && spacing[props.mr]};
  padding-top: ${(props) => props.pt && spacing[props.pt]};
  padding-bottom: ${(props) => props.pb && spacing[props.pb]};
  padding-left: ${(props) => props.pl && spacing[props.pl]};
  padding-right: ${(props) => props.pr && spacing[props.pr]};

  position: ${(props) => props.position && props.position};

  display: ${(props) => props.display && props.display};

  width: ${(props) => props.width && perimiters[props.width]};

  height: ${(props) => props.height && perimiters[props.height]};

  background: url(${(props) => props.bgImage && props.bgImage}) no-repeat;
  background-color: ${(props) =>
    props.bgColor && props.theme.colors[props.bgColor]};
  background-size: cover;
  background-position: center;

  border-radius: 2px;

  box-shadow: ${(props) =>
    props.shadow && props.theme.boxShadows[props.shadow]};

  @media (min-width: ${(props) => props.theme.viewports.tablet}) {
    margin-top: ${(props) => props.mtMd && spacing[props.mtMd]};
    margin-bottom: ${(props) => props.mbMd && spacing[props.mbMd]};
    margin-left: ${(props) => props.mlMd && spacing[props.mlMd]};
    margin-right: ${(props) => props.mrMd && spacing[props.mrMd]};
    padding-top: ${(props) => props.ptMd && spacing[props.ptMd]};
    padding-bottom: ${(props) => props.pbMd && spacing[props.pbMd]};
    padding-left: ${(props) => props.plMd && spacing[props.plMd]};
    padding-right: ${(props) => props.prMd && spacing[props.prMd]};

    width: ${(props) => props.widthMd && perimiters[props.widthMd]};

    display: ${(props) => props.displayMd && props.displayMd};
  }
`

export default Base
