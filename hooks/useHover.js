import { useState, useRef, useCallback, useEffect } from 'react'

const useHover = () => {
  const [hover, setHover] = useState(false)
  const ref = useRef(null)

  const handleMouseOver = useCallback(() => {
    setHover(true)
  }, [])
  const handleMouseOut = useCallback(() => {
    setHover(false)
  }, [])

  useEffect(() => {
    const element = ref.current
    if (element) {
      element.addEventListener('mouseover', handleMouseOver)
      element.addEventListener('mouseout', handleMouseOut)
    }
    return () => {
      element.removeEventListener('mouseover')
      element.removeEventListener('mouseout')
    }
  }, [ref, handleMouseOver, handleMouseOut])

  return [ref, hover]
}

export default useHover
