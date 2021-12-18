/* eslint-disable */

import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { deleteCategory } from 'utils/apis/category'
import { UpdateCategoryModal } from 'components/domain'
import { useToggle } from 'hooks'
import { mutate } from 'swr'

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`
const ControlBox = styled.div`
  flex-shrink: 0;
  button {
    padding: 0 5px;
    color: #3d7cd0;
    font-size: 15px;
    background-color: transparent;
    border: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
const Title = styled.h1`
  font-size: ${({ fontSize }) =>
    typeof fontSize === 'number' ? `${fontSize}px` : fontSize};
  font-weight: bold;
  white-space: ${({ ellipsis }) => ellipsis && 'nowrap'};
  overflow: ${({ ellipsis }) => ellipsis && 'hidden'};
  text-overflow: ${({ ellipsis }) => ellipsis && 'ellipsis'};
`
const CategoryCard = ({ title, categoryId, height, fontSize, ellipsis }) => {
  const [toggleEdit, onToggleEdit, setToggleEdit] = useToggle(false)

  const handleRemove = async () => {
    try {
      await deleteCategory(categoryId)
      mutate('/categories')
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <CardContainer height={height}>
      <UpdateCategoryModal
        toggleModal={toggleEdit}
        setToggleModal={setToggleEdit}
        categoryId={categoryId}
      />
      <Title fontSize={fontSize} ellipsis={ellipsis}>
        {title}
      </Title>
      <ControlBox>
        <button type="button" onClick={onToggleEdit}>
          Edit
        </button>
        <button type="button" onClick={handleRemove}>
          Remove
        </button>
      </ControlBox>
    </CardContainer>
  )
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ellipsis: PropTypes.bool,
}

CategoryCard.defaultProps = {
  height: '100px',
  fontSize: '25px',
  ellipsis: false,
}
export default CategoryCard
