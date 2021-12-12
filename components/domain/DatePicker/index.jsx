import dayjs from 'dayjs'
import { useState, useCallback } from 'react'
import { Text } from 'components/base'
import { Calendar } from 'components/domain'
import PropTypes from 'prop-types'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { useToggle } from 'hooks'
import * as Style from './style'

const DatePicker = ({
  width,
  height,
  borderRadious,
  fontSize,
  delimeter,
  onChange,
}) => {
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
      onChange && onChange(clickedDateInfo.format('YYYY/MM/DD'))
    },
    [setToggleCalendar],
  )

  return (
    <Style.Container width={width}>
      <Style.DatePickerWrapper
        height={height}
        borderRadious={borderRadious}
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
  borderRadious: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  delimeter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

DatePicker.defaultProps = {
  width: '100%',
  height: 45,
  borderRadious: 8,
  fontSize: 16,
  delimeter: '-',
}

export default DatePicker
