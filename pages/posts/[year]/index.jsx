/* eslint-disable */

import styled from '@emotion/styled'
import router from 'next/router'
import Flicking from '@egjs/react-flicking'
import { CalendarCard } from 'components/domain'
import { Children, useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'
import range from 'lodash-es/range'
import dayjs from 'dayjs'
import { Dropdown, Loading } from 'components/base'
import { DUMMY_DATA_YEAR } from 'constants/DropdownData'
import '@egjs/react-flicking/dist/flicking.css'
import { useGetCalendar } from 'utils/apis/post'

const today = dayjs()
const todayMonth = today.month()
const todayYear = today.year()

export const ToggleBtn = styled.button`
  border: none;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  display: block;
  margin: 0 auto;

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const flickingOptions = {
  align: 'center',
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

const flickingStyle = {
  margin: '20px 0 30px',
}

const Year = () => {
  const [user, setUser] = useState({})
  const [selectedYear, setYear] = useState('2021')

  useEffect(() => {
    setUser(JSON.parse(Cookies.get('user')))
  }, [])

  const { data, isLoading, isError } = useGetCalendar(todayYear, user.userId)

  const flicking = useRef()

  const selectHandler = (e) => {
    router.push(`/posts/${e.index + 1}`)
  }

  const toggleHandler = () => {
    if (
      flicking.current.panels[
        flicking.current.index
      ].element.classList.contains('front')
    ) {
      flicking.current.panels[flicking.current.index].element.classList.remove(
        'front',
      )
    } else {
      flicking.current.panels[flicking.current.index].element.classList.add(
        'front',
      )
    }
  }

  return (
    <AllWrapper>
      <FlickingHeader>
        <Dropdown
          selectedObj={selectedYear}
          setObj={setYear}
          data={DUMMY_DATA_YEAR}
          isObj={false}
          border={false}
        />
        <TodayDate>{today.format('YYYY-MM-DD')}</TodayDate>
      </FlickingHeader>
      <Flicking
        onSelect={selectHandler}
        ref={flicking}
        viewportTag="div"
        cameraTag="div"
        {...flickingOptions}
        style={{ ...flickingStyle }}>
        {CardArray}
      </Flicking>
      <ToggleBtn onClick={toggleHandler}>Calendar</ToggleBtn>
    </AllWrapper>
  )
}

const AllWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0;
`

const FlickingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

const TodayDate = styled.div`
  font-weight: 700;
`

export default Year
