import React from 'react'
import styled from 'styled-components'

import Flex from '../styled/Flex'
import Text from '../styled/Text'
import Box from '../styled/Box'

import GridView from './grid-view.svg'
import ListView from './list-view.svg'

interface IProps {
  filterOption: string
  eventsView: string
  setFilterOption: (value: string) => void
  setEventsView: (value: string) => void
}

function Options(props: IProps) {
  const filterOptions = ['ALL EVENTS', 'FUTURE EVENTS', 'PAST EVENTS']
  const { filterOption, eventsView, setFilterOption, setEventsView } = props

  return (
    <Flex
      width="10/12"
      mt="10"
      ml="auto"
      mr="auto"
      justifyContent="between"
      alignItems="center"
      mb="8"
    >
      <Box displayMd="none">
        <Text fontSize="sm">SHOW: ALL EVENTS</Text>
      </Box>

      <Box displayMd="flex" display="none">
        <Flex alignItems="center">
          {filterOptions.map((option, index) => (
            <FilterOption
              mr="10"
              fontSize="xs"
              fontWeight="semibold"
              letterSpacing="1px"
              color={
                filterOption === option
                  ? 'eventio.base'
                  : 'eventio.base-light-4'
              }
              cursor="pointer"
              key={index}
              onClick={() => setFilterOption(option)}
            >
              {option}
            </FilterOption>
          ))}
        </Flex>
      </Box>

      <Box>
        <StyledGridView
          mr="5"
          $active={eventsView === 'card'}
          onClick={() => setEventsView('card')}
        />
        <StyledListView
          $active={eventsView === 'list'}
          onClick={() => setEventsView('list')}
        />
      </Box>
    </Flex>
  )
}

const StyledGridView = styled(GridView)`
  margin-right: 1rem;
  fill: ${(props) =>
    props.$active
      ? props.theme.colors['eventio.base']
      : props.theme.colors['eventio.disabled']};
  cursor: pointer;

  &:hover {
    fill: ${(props) => props.theme.colors['eventio.base']};
  }
`

const StyledListView = styled(ListView)`
  fill: ${(props) =>
    props.$active
      ? props.theme.colors['eventio.base']
      : props.theme.colors['eventio.disabled']};
  cursor: pointer;

  &:hover {
    fill: ${(props) => props.theme.colors['eventio.base']};
  }
`

const FilterOption = styled(Text)`
  &:hover {
    color: ${(props) => props.theme.colors['eventio.base']};
  }
`

export default Options
