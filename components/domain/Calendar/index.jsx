import dayjs from 'dayjs'
import { useState } from 'react'
import range from 'lodash-es/range'
import { Text } from 'components/base'
import PropTypes from 'prop-types'
import * as Style from './style'

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

  const isSameToday = (index) =>
    index + 1 === todayObj.date() &&
    thisMonth === todayObj.month() &&
    thisYear === todayObj.year()

  const isSameChangedDate = (index) =>
    dayObj.date() === index + 1 &&
    dayObj.month() === dayjs(changedDate).month() &&
    dayObj.year() === dayjs(changedDate).year()

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, 'month')) // 복제된 한달 전 dayjs 객체가 리턴됨
  }

  const handleNext = () => {
    setDayObj(dayObj.add(1, 'month')) // 복제된 한달 후 dayjs 객체가 리턴됨
  }

  const handleClick = (index, prevMonth) => {
    const clickedDate = prevMonth ? index : index + 1
    const clickedDateInfo = dayjs(
      `${thisYear}-${prevMonth ? thisMonth : thisMonth + 1}-${clickedDate}`,
    )
    onClick(clickedDateInfo)
  }

  const handleClassName = (index) => {
    if (isSameToday(index) && isSameChangedDate(index)) {
      return 'today active'
    }
    if (isSameToday(index)) {
      return 'today'
    }
    if (isSameChangedDate(index)) {
      return 'active'
    }

    return ''
  }

  return (
    <Style.CalendarWrapper>
      <Style.Header>
        <Style.NavButton onClick={handlePrev}>&lt;</Style.NavButton>
        <Text strong>{dayObj.format('MMM YYYY')}</Text>
        <Style.NavButton onClick={handleNext}>&gt;</Style.NavButton>
      </Style.Header>

      <Style.WeekWrapper>
        {weekDays.map((day) => (
          <Style.Cell className="week-cell" key={day}>
            <Text strong>{day}</Text>
          </Style.Cell>
        ))}
      </Style.WeekWrapper>

      <Style.WeekWrapper>
        {range(firstDay).map((index) => (
          <Style.Cell
            key={index}
            onClick={() =>
              handleClick(
                firstDayInfoOfMonth.subtract(firstDay - index, 'day').date(),
                true,
              )
            }>
            <Text color="#ddd">
              {firstDayInfoOfMonth.subtract(firstDay - index, 'day').date()}
            </Text>
          </Style.Cell>
        ))}

        {range(lastDayOfthisMonth).map((index) => (
          <Style.Cell
            onClick={() => handleClick(index)}
            className={handleClassName(index)}
            key={index}>
            {index + 1}
          </Style.Cell>
        ))}
      </Style.WeekWrapper>
    </Style.CalendarWrapper>
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
