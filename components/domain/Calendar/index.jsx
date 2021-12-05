import dayjs from 'dayjs'
import { useState } from 'react'
import range from 'lodash-es/range'
import { Text } from 'components/base'
import PropTypes from 'prop-types'
import { CalendarWrapper, Header, NavButton, Cell, WeekWrapper } from './style'

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const todayObj = dayjs()

const Calendar = ({ onClick, changedDate }) => {
  const [dayObj, setDayObj] = useState(dayjs(changedDate))

  const thisYear = dayObj.year()
  const thisMonth = dayObj.month() // 1월 = 0, 2월 = 1
  const lastDayOfthisMonth = dayObj.daysInMonth()

  const firstDayInfoOfMonth = dayjs(`${thisYear}-${thisMonth + 1}-1`) // 2021-12-1
  const firstDay = firstDayInfoOfMonth.day() // 일요일 = 0, 월요일 = 1

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, 'month')) // 복제된 한달 전 dayjs 객체가 리턴됨
  }

  const handleNext = () => {
    setDayObj(dayObj.add(1, 'month')) // 복제된 한달 후 dayjs 객체가 리턴됨
  }

  const handleClick = (index, prevMonth) => {
    const clickedDate = index + 1
    const clickedDateInfo = dayjs(
      `${thisYear}-${prevMonth ? thisMonth : thisMonth + 1}-${clickedDate}`,
    )
    onClick(clickedDateInfo)
  }

  const handleClassName = (index) => {
    if (
      index + 1 === todayObj.date() &&
      thisMonth === todayObj.month() &&
      thisYear === todayObj.year() &&
      dayObj.date() === index + 1
    ) {
      return 'today active'
    }
    if (
      index + 1 === todayObj.date() &&
      thisMonth === todayObj.month() &&
      thisYear === todayObj.year()
    ) {
      return 'today'
    }
    if (dayObj.date() === index + 1) {
      return 'active'
    }

    return ''
  }

  return (
    <CalendarWrapper>
      <Header>
        <NavButton onClick={handlePrev}>&lt;</NavButton>
        <Text strong>{dayObj.format('MMM YYYY')}</Text>
        {/* FIXME: Text는 예임 드롭다운으로 바꿔야 함 */}
        <NavButton onClick={handleNext}>&gt;</NavButton>
      </Header>

      <WeekWrapper>
        {weekDays.map((day) => (
          <Cell className="week-cell" key={day}>
            <Text strong>{day}</Text>
          </Cell>
        ))}
      </WeekWrapper>

      <WeekWrapper>
        {range(firstDay).map((index) => (
          <Cell key={index} onClick={() => handleClick(index, 'prevMonth')}>
            <Text color="#ddd">
              {firstDayInfoOfMonth.subtract(firstDay - index, 'day').date()}
            </Text>
          </Cell>
        ))}

        {range(lastDayOfthisMonth).map((index) => (
          <Cell
            onClick={() => handleClick(index)}
            className={handleClassName(index)}
            key={index}>
            {index + 1}
          </Cell>
        ))}
      </WeekWrapper>
    </CalendarWrapper>
  )
}

Calendar.propTypes = {
  onClick: PropTypes.func.isRequired,
  changedDate: PropTypes.string,
}

Calendar.defaultProps = {
  changedDate: '',
}

export default Calendar
