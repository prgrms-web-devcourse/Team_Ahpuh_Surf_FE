import { PostDetailSampleData } from 'utils/SampleData/PostDetail'
import theme from 'styles/theme'
import { PostDetail } from 'components/domain'
import styled from '@emotion/styled'

const Detail = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  // eslint-disable-next-line consistent-return
  const getColorRandomly = () => {
    const value = Math.floor(Math.random() * 5)
    switch (value) {
      case 1:
        return theme.surfColor.$blue__1
      case 2:
        return theme.surfColor.$blue__2
      case 3:
        return theme.surfColor.$blue__3
      case 4:
        return theme.surfColor.$blue__4
      case 5:
        return theme.surfColor.$blue__5
      default:
    }
  }
  const isPostMine = () => {
    // api로부터 받은 userId와 내 userId 비교하는 로직 잇어야 한다
    return true
  }

  const { score, title, selectedDate, content } = PostDetailSampleData
  return (
    <Container>
      <PostDetail
        backgroundColor={getColorRandomly()}
        score={score}
        categoryName='react' // TODO: api로부터 카테고리 이름도 같이 들어오면 좋겠음
        title={title}
        username='Kevin' // TODO: api로부터 유저네임 받으면 좋겟음
        date={selectedDate}
        like={false} // TODO: like 여부 api에 추가해야함
        content={content}
        // profileImage={}
        follow={isPostMine()} // TODO: api로부터 내꺼인지 받아온다음에 팔로우/언팔 내용 랜더링 여부 결정해야함
        // imageUrl={}
      />
    </Container>)
}
export default Detail