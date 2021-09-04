import React, { useEffect, useState } from 'react'
import filterDate from '../utils/filter-date'
import { IEvent } from '../utils/types/events'

function useFilter(filterOption: string, events: IEvent[] = []) {
  const [state, setState] = useState<IEvent[]>(events)

  useEffect(() => {
    setState([...filterDate(filterOption, events)])
  }, [filterOption, events])

  return state
}

export default useFilter
