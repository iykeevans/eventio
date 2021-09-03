import React, { useEffect, RefObject } from 'react'

/**
 * Hook allows callback when clicked outside of the passed ref
 */
export const useOuterClick = (
  ref: RefObject<HTMLDivElement>,
  callback: Function
) => {
  useEffect(() => {
    /**
     * return callback if clicked outside of ref element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        return callback()
      }
    }

    // Bind the event listener
    document.addEventListener('click', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside)
    }
  })
}
