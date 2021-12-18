/* eslint-disable */

import { AiOutlinePlus } from 'react-icons/ai'
import styled from '@emotion/styled'
import { CategoryCard, AddSurfModal } from 'components/domain'
import { useGetCategories } from 'utils/apis/category'
import { useToggle } from 'hooks'

const Main = styled.div`
  height: 100%;
  padding: 20px;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`
const Body = styled.div`
  margin-top: 20px;
  overflow: scroll;
  & * {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
const EmptyCategory = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
`
const CategoryManage = () => {
  const { data: categories, isLoading: categoriesLoading } = useGetCategories({
    revalidateOnFocus: false,
  })
  const [togglePlus, onTogglePlus, setTogglePlus] = useToggle(false)

  return (
    <Main>
      <AddSurfModal toggleModal={togglePlus} setToggleModal={setTogglePlus} />
      <Top>
        <div style={{ fontSize: 20, fontWeight: 'bold' }}>Surf Manager</div>
        <AiOutlinePlus
          size={25}
          style={{ cursor: 'pointer' }}
          onClick={onTogglePlus}
        />
      </Top>
      <Body>
        {categories.length > 0 ? (
          categories.map(({ categoryId, name }) => (
            <CategoryCard
              key={categoryId}
              categoryId={categoryId}
              title={name}
              height={70}
              fontSize={18}
              ellipsis
            />
          ))
        ) : (
          <EmptyCategory>Category does not exist 🥲</EmptyCategory>
        )}
      </Body>
    </Main>
  )
}
export default CategoryManage
