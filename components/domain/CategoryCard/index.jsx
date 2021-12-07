import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const CategoryCard = ({ title, categoryId }) => {
  const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 10px;
  `
  const ControlBox = styled.div`
    span {
      margin-left: 5px;
      margin-right: 5px;
      color: #3d7cd0;
      font-size: 15px;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  `
  const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
  `

  const handleEdit = () => {
    console.log(`show edit modal. CategoryId: ${categoryId}`)
  }
  const handleRemove = () => {
    console.log(`show remove modal CategoryId: ${categoryId}`)
  }
  return (
    <CardContainer>
      <Title>{title}</Title>
      <ControlBox>
        <span onClick={handleEdit}>Edit</span>
        <span onClick={handleRemove}>Remove</span>
      </ControlBox>
    </CardContainer>
  )
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
}
export default CategoryCard
