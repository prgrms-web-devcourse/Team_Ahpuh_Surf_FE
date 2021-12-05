import styled from '@emotion/styled'
import { Text } from 'components/base'

const TabList = styled.li`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  list-style: none;
  cursor: pointer;
  transition: color 200ms ease-in-out;

  &:not(:last-child) {
    border-right: 1px solid black;
  }
`

const TabItem = ({ index, activeIndex, label, fontSize, onClick }) => (
  <TabList
    index={index}
    activeIndex={activeIndex}
    key={index}
    onClick={onClick}>
    <Text
      color={index === activeIndex && '#5298E9'}
      strong={index === activeIndex}
      size={fontSize}>
      {label}
    </Text>
  </TabList>
)

export default TabItem
