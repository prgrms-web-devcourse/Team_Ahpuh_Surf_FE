import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Flicking from '@egjs/react-flicking'
import { CalendarCard } from 'components/domain'
import { Children, useEffect, useRef, useState } from 'react'
import range from 'lodash-es/range'
import dayjs from 'dayjs'
import { MainDropdown } from 'components/base'
import '@egjs/react-flicking/dist/flicking.css'
import * as Style from 'styles/pageStyles/YearStyle'
import useGetPostsCountYear from 'utils/apis/post/useGetPostsCountYear'

const today = dayjs()
const todayMonth = today.month()
const todayYear = today.year()

const YEAR_LIST = [
  {
    name: '2021',
  },
  {
    name: '2020',
  },
  {
    name: '2019',
  },
]

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

const flickingStyle = {
  margin: '20px 0 30px',
}

const Main = () => {
  const router = useRouter()
  const flicking = useRef()
  const [selectedYear, setYear] = useState({
    name: todayYear,
  })
  const [uid, setUid] = useState()
  const [postCnt, setPostCnt] = useState([])

  const { data } = useGetPostsCountYear(selectedYear.name, uid)
  useEffect(() => {
    if (!postCnt?.length) {
      setPostCnt(data)
    }
  }, [data])

  const monthlyCnt = (month) =>
    postCnt
      ?.filter(({ date }) => date.slice(5, 7) == month)
      .map(({ date }) => date.slice(8, 10))

  const monthlyCntList = range(12).map((month) => monthlyCnt(month + 1))

  useEffect(() => {
    router.push(`/posts/${selectedYear.name}`)
  }, [selectedYear])

  useEffect(() => {
    if (!router.isReady) return
    const { year } = router.query
    setYear({
      name: year,
    })
  }, [router.isReady])

  useEffect(() => {
    if (!Cookies.get('user')) {
      router.push('/login')
    } else {
      const { userId } = JSON.parse(Cookies.get('user'))
      setUid(userId)
    }
  }, [])

  const handleSelect = (e) => {
    router.push(`/posts/${selectedYear.name}/${e.index + 1}`)
  }

  const handleToggle = () => {
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

  const handleClick = (item) => {
    setYear(item)
  }

  const handleClickDate = () => {
    // todayMonth
    flicking.current.moveTo(todayMonth)
  }

  if (!selectedYear) return <div />

  return (
    <Style.AllWrapper>
      <Style.FlickingHeader>
        <MainDropdown
          selected={selectedYear}
          handleClick={handleClick}
          data={YEAR_LIST}
          isObj
          border={false}
        />
        <Style.TodayDate onClick={handleClickDate}>
          {today.format('YYYY-MM-DD')}
        </Style.TodayDate>
      </Style.FlickingHeader>
      <Flicking
        onSelect={handleSelect}
        ref={flicking}
        viewportTag="div"
        cameraTag="div"
        {...flickingOptions}
        style={{ ...flickingStyle }}>
        {Children.toArray(
          range(12).map((month) => (
            <CalendarCard
              checkList={monthlyCntList[month]}
              index={month}
              key={month}
              width={300}
              fontSize={60}
              monthFont={12}
              dayFont={12}
              isLight={false}
              dayCnt={monthlyCntList[month]?.length || 0}
              thisYear={2021}
              thisMonth={month + 1}
            />
          )),
        )}
      </Flicking>
      <Style.ToggleBtn onClick={handleToggle}>Calendar</Style.ToggleBtn>
    </Style.AllWrapper>
  )
}

export default Main
