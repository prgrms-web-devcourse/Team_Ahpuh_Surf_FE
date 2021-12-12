import { useCallback, useState } from 'react'

const useToggle = ({ initialState = false }) => {
  const [state, setState] = useState(initialState)
  const onToggle = useCallback(() => setState(() => !state), [state])

  return [state, onToggle, setState]
}

export default useToggle
