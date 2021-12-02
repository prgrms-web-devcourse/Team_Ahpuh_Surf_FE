import styled from '@emotion/styled'
import { useToggle } from 'hooks'

export default {
  title: 'Hook/useToggle',
}
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ toggle }) => (toggle ? 'black' : 'red')};
`

export const Default = () => {
  const [toggle, onToggle] = useToggle(false)
  return (
    <div>
      <Box toggle={toggle} />
      <button type="submit" onClick={onToggle}>
        Toggle
      </button>
    </div>
  )
}
