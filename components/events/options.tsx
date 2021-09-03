import React from 'react'
import styled from 'styled-components'

import Flex from '../styled/Flex'
import Text from '../styled/Text'
import Box from '../styled/Box'

import GridView from './grid-view.svg'
import ListView from './list-view.svg'
import ArrowTwo from '../arrow-two.svg'
import DropDown from '../ui-elements/drop-down'

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
      mt="16"
      ml="auto"
      mr="auto"
      justifyContent="between"
      alignItems="center"
      mb="8"
    >
      <Box displayMd="none">
        <DropDown options={filterOptions} setOption={setFilterOption}>
          <Flex alignItems="center">
            <Text
              as="span"
              fontSize="xs"
              fontWeight="semibold"
              letterSpacing="1px"
              color="eventio.base-light-4"
            >
              SHOW:
            </Text>{' '}
            <Text
              as="span"
              fontSize="xs"
              fontWeight="semibold"
              letterSpacing="1px"
              ml="2"
              mr="3"
            >
              {filterOption}
            </Text>
            <ArrowTwo />
          </Flex>
        </DropDown>
      </Box>

      <Box displayMd="flex" display="none">
        <Flex
          alignItems="center"
          role="tab-list"
          aria-label="Filter Options"
          as="ul"
          pt="0"
          pl="0"
          pr="0"
          pb="0"
          mb="0"
          mt="0"
        >
          {filterOptions.map((option, index) => (
            <FilterOption
              as="li"
              role="tab"
              aria-selected={filterOption === option}
              aria-controls={`${option}-tab`}
              id={option}
              tabIndex={filterOption === filterOptions[0] ? 0 : -1}
              listStyle="none"
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

      <Box role="tab-list" aria-label="Event View">
        <StyledGridView
          role="tab"
          aria-selected={eventsView === 'card'}
          aria-controls="card-tab"
          id="card"
          tabIndex="0"
          $active={eventsView === 'card'}
          onClick={() => setEventsView('card')}
        />
        <StyledListView
          role="tab"
          aria-selected={eventsView === 'card'}
          aria-controls="list-tab"
          id="list"
          tabIndex="-1"
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
