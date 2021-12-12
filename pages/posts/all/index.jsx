import { CalendarCard } from 'components/domain'
import { Children, useEffect, useRef, useState } from 'react'
import range from 'lodash-es/range'
const flickingOptions = {
  align: 'prev',
  defaultIndex: todayMonth,
  horizontal: true,
  circular: true,
  noPanelStyleOverride: false,
  moveType: 'snap',
  renderOnlyVisible: true,
  autoResize: false,
  inputType: ['touch', 'mouse'],
}
const CardArray = Children.toArray(
  range(12).map((month) => (
    <CalendarCard
      index={month}
      key={`${month}`}
      width={300}
      fontSize={60}
      monthFont={12}
      dayFont={12}
      isLight={false}
      dayCnt={28}
      thisYear={2021}
      thisMonth={month + 1}
    />
  )),
)
const Main = () => {
  const flicking = useRef()

  const selectHandler = (e) => {
    router.push(`/posts/${e.index + 1}`)
  }
  return (
      <Flicking
        onSelect={selectHandler}
        ref={flicking}
        viewportTag="div"
        cameraTag="div"
        {...flickingOptions}
        style={{ ...flickingStyle }}>
        {CardArray}
      </Flicking>
  )
}

export default Main
