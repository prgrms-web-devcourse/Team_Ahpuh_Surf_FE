import PropTypes from 'prop-types'
import * as Style from './style'

const DashboardCard = ({ categoryName, score, recordAmount }) => (
  <Style.CardContainer>
    <Style.Category>{categoryName}</Style.Category>
    <Style.Score>{score}</Style.Score>
    <Style.Record>{recordAmount}</Style.Record>
    <Style.Text>records</Style.Text>
  </Style.CardContainer>
)

DashboardCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  recordAmount: PropTypes.number.isRequired,
}

export default DashboardCard
