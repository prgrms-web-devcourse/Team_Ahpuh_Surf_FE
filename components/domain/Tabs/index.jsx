import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import TabItem from './TabItem'
import TabPanel from './TabPanel'

// 1. Tabs는 상위 컴포넌트에서 labelSet 배열을 받아 tab을 만든다.
// 2. TabPanel은 actvied된 tab의 labelSet을 prop로 받는다.

const TabWrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid;
`

const Tabs = ({ labelSet, fontSize, panelFontSize }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <>
      <TabWrapper>
        {labelSet.map(({ label, query }, index) => (
          <TabItem
            key={label}
            index={index}
            activeIndex={activeIndex}
            label={label}
            fontSize={fontSize}
            onClick={() => handleClick(index)}
          />
        ))}
      </TabWrapper>
      <TabPanel
        activeLabelSet={labelSet[activeIndex]}
        fontSize={panelFontSize}
      />
    </>
  )
}

Tabs.propTypes = {
  labelSet: PropTypes.array.isRequired, // FIXME: 예임이 해제한 것 같음
  fontSize: PropTypes.number,
  panelFontSize: PropTypes.number,
}
Tabs.defaultProps = {
  fontSize: 16,
  panelFontSize: 16,
}

export default Tabs
