import { PostDetailSampleData } from 'utils/SampleData/PostDetail'
import theme from 'styles/theme'
import { PostDetail } from 'components/domain'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useGetPost } from 'utils/apis/post'
import { useGetCategories } from 'utils/apis/category'
import useGetUser from 'utils/apis/user/useGetUser'
import { useEffect, useState } from 'react'

const Detail = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const [isMine, setMine] = useState(false)
  const { postId } = useRouter().query
  const { data: post } = useGetPost(postId) // FIXME 현재 postId가 제대로 된 값이 아니기 때문에 정상적인 값을 리턴 못한다...
  const { data: categories } = useGetCategories() // categoryName 찾기 위해 사용
  const { data: user } = useGetUser(post?.userId)
  // FIXME: 제대로 된 postId가 들어갔으면 여기도 제대로 된 값이 들어가서 문제 없음!
  // 본인이 작성한지 여부 체크하기 위해 사용

  // TODO: useGetUser()를 선택적으로 호출할 수 있도록 swr쪽에서 핸들링하는 방법 찾아낼것!!!
  useEffect(() => {
    const { userId } = JSON.parse(Cookies.get('user'))
    // console.log(Cookies.get('user'))
    // console.log(user Id)
    if (userId === post?.userId) {
      setMine(true)
    } else {
      setMine(false)
    }
  }, [post])

  const getCategoryName = () => {
    const res = categories.filter((item) => item.categoryId === post.categoryId)
    return res.name
  }
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
  if (!post || !categories || !user) {
    return <p />
  }
  return (
    <Container>
      <PostDetail
        backgroundColor={getColorRandomly()}
        score={post.score}
        categoryName={() => getCategoryName()}
        username={user.userName}
        date={post.selectedDate}
        like={post.isLiked}
        content={post.content}
        profileImage={user.profilePhotoUrl}
        follow={isMine}
        imageUrl={post.fileUrl}
      />
    </Container>
  )
}

export default Detail
