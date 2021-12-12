import dayjs from 'dayjs'
import range from 'lodash-es/range'
import { Text } from 'components/base'
import PropTypes from 'prop-types'
import * as Style from './calendarStyle'

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const BackCalendar = ({ thisYear, thisMonth, isLight, dayFont, monthFont }) => {
  const thisMonthInfo = dayjs(`${thisYear}-${thisMonth}-1`)
  const thisMonthDayCnt = thisMonthInfo.daysInMonth()
  const firstDay = thisMonthInfo.day() // 일요일 = 0, 월요일 = 1

  return (
    <Style.CalendarWrapper isLight={isLight}>
      <Style.Header fontSize={monthFont}>
        {thisMonthInfo.format('MMM').toUpperCase()}
      </Style.Header>
      <Style.WeekHeader>
        {weekDays.map((day) => (
          <Style.Cell fontSize={dayFont} className="week-cell" key={day}>
            {day}
          </Style.Cell>
        ))}
      </Style.WeekHeader>
      <Style.WeekWrapper>
        {range(firstDay).map((index) => (
          <Style.Cell key={index} fontSize={dayFont}>
            <Text color="#ddd">
              {thisMonthInfo.subtract(firstDay - index, 'day').date()}
            </Text>
          </Style.Cell>
        ))}
        {range(thisMonthDayCnt).map((index) => (
          <Style.Cell fontSize={dayFont} key={index}>
            {index + 1}
          </Style.Cell>
        ))}
      </Style.WeekWrapper>
    </Style.CalendarWrapper>
  )
}

BackCalendar.propTypes = {
  thisYear: PropTypes.number.isRequired,
  thisMonth: PropTypes.number.isRequired,
  isLight: PropTypes.bool.isRequired,
}

BackCalendar.defaultProps = {}

export default BackCalendar
