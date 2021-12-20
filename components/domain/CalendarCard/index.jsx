import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { forwardRef } from 'react'
import * as Style from './style'
import BackCalendar from './calendar'

const CalendarCard = forwardRef(
  ({ width, isLight, cardColor, dayCnt, thisYear, thisMonth }, ref) => {
    const fontSize = width / 5
    const thisMonthObj = dayjs(`${thisYear}-${thisMonth}-1`)
    const monthName = thisMonthObj.format('MMMM')
    const dayPerMonth = thisMonthObj.daysInMonth()

    return (
      <Style.CardWrapper ref={ref} className="front" width={width}>
          {/* <Style.CardInner> */}
          <Style.CardInner className="cardInner">
            <Style.CardFront cardColor={cardColor} isLight={isLight}>
              <Style.MonthWrapper>
                <Style.MonthNumber fontSize={fontSize}>
                  {thisMonth}
                </Style.MonthNumber>
                <Style.MonthString fontSize={fontSize}>
                  {monthName}
                </Style.MonthString>
              </Style.MonthWrapper>
              <Style.StatBar>
                <Style.BaseBar
                  isLight={isLight}
                  rate={(dayCnt / dayPerMonth) * 100}
                />
                <Style.StatRate>
                  <Style.DayCnt isLight={isLight}>{dayCnt}</Style.DayCnt>
                  &nbsp;/&nbsp;
                  {dayPerMonth}
                </Style.StatRate>
              </Style.StatBar>
            </Style.CardFront>
            <Style.CardBack>
              <BackCalendar thisYear={thisYear} thisMonth={thisMonth} isLight />
            </Style.CardBack>
          </Style.CardInner>
      </Style.CardWrapper>
    )
  },
)

CalendarCard.propTypes = {
  width: PropTypes.number,
  isLight: PropTypes.bool,
  cardColor: PropTypes.string,
  dayCnt: PropTypes.number.isRequired,
  thisYear: PropTypes.number.isRequired,
  thisMonth: PropTypes.number.isRequired,
}

CalendarCard.defaultProps = {
  width: 300,
  isLight: false,
  cardColor: '#c1ddeb',
}

CalendarCard.displayName = 'CalendarCard'

export default CalendarCard
