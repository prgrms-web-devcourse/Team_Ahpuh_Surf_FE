import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useState } from 'react'
import { useToggle } from 'hooks'
import { Modal } from 'components/base'
import TabItem from './TabItem'
import TabPanel from './TabPanel'

const TabWrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid;
`

const Tabs = ({ labelSet, fontSize, panelFontSize }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [toggleTabs, setToggleTabs] = useToggle(false)

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <>
      {/* <Modal on={toggleTabs} toggle={setToggleTabs} closeBtn={false}> */}
      <Modal on={toggleTabs} toggle={setToggleTabs} closeBtn={false}>
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
      </Modal>
      <button type="button" onClick={setToggleTabs}>
        toggleTabs
      </button>
    </>
  )
}

Tabs.propTypes = {
  labelSet: PropTypes.arrayOf(PropTypes.object).isRequired,
  fontSize: PropTypes.number,
  panelFontSize: PropTypes.number,
}
Tabs.defaultProps = {
  fontSize: 16,
  panelFontSize: 16,
}

export default Tabs
