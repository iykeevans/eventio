import styled from 'styled-components'

import Spinner from './spinner.svg'

const StyledSpinner = styled(Spinner)`
  animation: spin 2s linear infinite;
  display: inline-block;
  color: black;
  max-height: 65%;
  height: 3rem;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`
export default StyledSpinner
