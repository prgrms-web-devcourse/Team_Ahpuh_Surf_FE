import dayjs from 'dayjs'
import { useState, useCallback } from 'react'
import { Text } from 'components/base'
import { Calendar } from 'components/domain'
import PropTypes from 'prop-types'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { useToggle } from 'hooks'
import * as Style from './style'

const DatePicker = ({ width, height, fontSize, delimeter }) => {
  const dayObj = dayjs()

  const [date, setDate] = useState(dayObj.format('DD'))
  const [month, setMonth] = useState(dayObj.format('MM'))
  const [year, setYear] = useState(dayObj.year())

  const [toggleCalendar, setToggleCalendar] = useToggle(false)
  const handleClickedDate = useCallback(
    (clickedDateInfo) => {
      setYear(clickedDateInfo.year())
      setMonth(clickedDateInfo.format('MM'))
      setDate(clickedDateInfo.format('DD'))
      setToggleCalendar(false)
    },
    [setToggleCalendar],
  )

  return (
    <Style.Container>
      <Style.DatePickerWrapper
        width={width}
        height={height}
        onClick={setToggleCalendar}>
        <Text
          size={
            fontSize
          }>{`${date}${delimeter}${month}${delimeter}${year}`}</Text>
        <BsFillCalendarCheckFill />
      </Style.DatePickerWrapper>
      {toggleCalendar && (
        <Calendar
          onClick={handleClickedDate}
          changedDate={`${year}-${month}-${date}`}
        />
      )}
    </Style.Container>
  )
}

DatePicker.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  delimeter: PropTypes.string,
}

DatePicker.defaultProps = {
  width: '100%',
  height: '45px',
  fontSize: 16,
  delimeter: '-',
}

export default DatePicker
