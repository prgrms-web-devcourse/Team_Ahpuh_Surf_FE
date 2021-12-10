import { AiOutlinePlus } from 'react-icons/ai'
import styled from '@emotion/styled'
import Link from 'next/link'
import { data } from 'utils/SampleData/CategoryManage'
import { CategoryCard } from 'components/domain'

const CategoryManage = () => {
  const Main = styled.div`
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
  const handlePlus = () => {
    console.log('plus')
  }
  // TODO: 서프 생성 모달 완성시 해당 링크 추가하기

  return (
    <Main>
      <Top>
        <div style={{ fontSize: 20, fontWeight: 'bold' }}>Surf Manager</div>
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <Link href="/">
          <AiOutlinePlus
            size={25}
            style={{ cursor: 'pointer' }}
            onClick={handlePlus}
          />
        </Link>
      </Top>
      <Body>
        {data.map(({ categoryId, name }) => (
          <CategoryCard categoryId={categoryId} title={name} />
        ))}
      </Body>
    </Main>
  )
}
export default CategoryManage
