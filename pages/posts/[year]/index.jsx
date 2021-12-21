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

// TODO: api 호출해서 월별로 파싱,,,한 다음에 다시 일자로 파싱해서 달력에 동그라미 넣기,,,,,

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

const DUMMY = [
  ['02', '09', '10', '12', '16', '21', '27'],
  ['02', '09', '10', '12', '16', '21', '27'],
  ['02', '09', '10', '12', '16', '21', '27'],
  ['02', '09', '10', '12', '16', '21', '27'],
  ['02', '09', '10', '12', '16', '21', '27'],
  ['02', '09', '10', '12', '16', '21', '27'],
  ['02', '09', '10', '12', '16', '21', '27'],
  ['02', '09', '10', '12', '16', '21', '27'],
  ['02', '09', '10', '12', '16', '21', '27'],
  ['02', '09', '10', '12', '16', '21', '27'],
  ['02', '09', '10', '12', '16', '21', '27'],
  ['02', '09', '10', '12', '16', '21', '27'],
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

const Main = () => {
  const router = useRouter()
  const flicking = useRef()
  const [selectedYear, setYear] = useState({
    name: todayYear 
  })
  const [uid, setUid] = useState()
  const [postCnt, setPostCnt] = useState([])

  const { data } = useGetPostsCountYear(selectedYear.name, uid)
  useEffect(() => {
    if (!postCnt?.length) {
      setPostCnt(data)
    }
  }, [data])

  const monthlyCnt = (month) => postCnt?.filter(({date}) => date.slice(5, 7) == month)
    .map(({date}) => date.slice(8, 10))

  const monthlyCntList = range(12).map(month => monthlyCnt(month + 1))

  // TODO : useEffect 연쇄 현상(?) 해결
  // router.query로부터 맨 처음에 year를 가져오면 undefined가 떠서
  // useEffect에 넣어놨고, 이 때문에 제대로 된 값이 들어올 때까지 한 4번 정도 호출됨,,,
  // 근데 그러면 setYear도 그만큼 호출이 돼서 selectedYear의 값도 같은 횟수만큼 변경되는데
  // 또 그에 따라 mutate가 실행돼서 api 호출이 여러번 되는 현상 발생

  useEffect(() => {
    router.push(`/posts/${selectedYear.name}`)
  }, [selectedYear])

  useEffect(() => {
    if (!router.isReady) return
    const { year } = router.query
    setYear({
      name: year
    })
  }, [router.isReady])

  useEffect(() => {
    if (!Cookies.get('user')) {
      router.push('/login')
    }
    else {
      const {userId} = JSON.parse(Cookies.get('user'))
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
        <Style.TodayDate>{today.format('YYYY-MM-DD')}</Style.TodayDate>
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
              // checkList={DUMMY[month]}
              index={month}
              key={month}
              width={300}
              fontSize={60}
              monthFont={12}
              dayFont={12}
              isLight={false}
              dayCnt={monthlyCntList[month]?.length || 0}
              // dayCnt={DUMMY[month].length}
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
