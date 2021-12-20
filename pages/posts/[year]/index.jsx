import styled from '@emotion/styled'
import Cookies from 'js-cookie'
import router, {useRouter} from 'next/router'
import Flicking from '@egjs/react-flicking'
import { CalendarCard } from 'components/domain'
import { Children, useEffect, useRef, useState } from 'react'
import range from 'lodash-es/range'
import dayjs from 'dayjs'
import { Dropdown } from 'components/base'
import { DUMMY_DATA_YEAR } from 'constants/DropdownData'
import '@egjs/react-flicking/dist/flicking.css'
import * as Style from 'styles/pageStyles/YearStyle'

// TODO: api 호출해서 월별로 파싱,,,한 다음에 다시 일자로 파싱해서 달력에 동그라미 넣기,,,,,


const today = dayjs()
const todayMonth = today.month()

const flickingOptions = {
  align: 'center',
  defaultIndex: todayMonth,
  horizontal: true,
  circular: true,
  noPanelStyleOverride: false,
  moveType: 'snap',
  renderOnlyVisible: false,
  autoResize: false,
  inputType: ['touch', 'mouse'],
}

const CardArray = Children.toArray(
  range(12).map((month) => (
    <CalendarCard
      index={month}
      key={month}
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

const Main =  () => {
  const userouter =  useRouter()
  const flicking = useRef()
  const [selectedPath, setPath] = useState(null)

  useEffect(() => {
    if (!userouter.isReady) return
    const { asPath } = userouter 
    console.log(asPath)
    // const { year } = query
    // setYear(year)
    setPath(asPath)
  }, [userouter.isReady])
  

  const selectHandler = (e) => {
    router.push(`${selectedPath}/${e.index + 1}`)
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

  if (!selectedPath) return <div/>

  return (
    <Style.AllWrapper>
      <Style.FlickingHeader>
        <Dropdown data={DUMMY_DATA_YEAR} isObj={false} border={false} />
        <Style.TodayDate>{today.format('YYYY-MM-DD')}</Style.TodayDate>
      </Style.FlickingHeader>
      <Flicking
        onSelect={selectHandler}
        ref={flicking}
        viewportTag="div"
        cameraTag="div"
        {...flickingOptions}
        style={{ ...flickingStyle }}>
        {CardArray}
      </Flicking>
      <Style.ToggleBtn onClick={toggleHandler}>Calendar</Style.ToggleBtn>
    </Style.AllWrapper>
  )
}

export default Main
