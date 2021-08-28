import { ReactNode } from 'react'
import styled from 'styled-components'

import Flex from '../Styled/Flex'

import Logo from '../Logo.svg'

function LayoutTwo(page: ReactNode) {
  return (
    <Wrapper>
      <Header>
        <Flex
          width="10/12"
          widthMd="11/12"
          ml="auto"
          mr="auto"
          alignItems="center"
          justifyContent="between"
        >
          <StyledLogo />

          <Avatar />
        </Flex>
      </Header>

      {page}
    </Wrapper>
  )
}

const StyledLogo = styled(Logo)`
  fill: #323c46;
`

const Header = styled.header`
  left: 0px;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
`

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  background: #d9dce1;
  border-radius: 100%;
`

const Wrapper = styled.div`
  background: #f9f9fb;
  min-height: 100vh;
`

export default LayoutTwo
