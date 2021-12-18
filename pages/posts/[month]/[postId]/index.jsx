import theme from 'styles/theme'
import { PostDetail } from 'components/domain'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const [pId, setPId] = useState(null)
  const [bgColor, setBgColor] = useState(null)

  useEffect(() => {
    if (!router.isReady) return
    const { postId } = router.query
    setPId(postId)
  }, [router.isReady])

  const { data: posting } = useGetPost(pId)
  const { data: categories } = useGetCategories() // categoryName 찾기 위해 사용
  const { data: user } = useGetUser(posting.userId)

  const getCategoryName = () => {
    const res = categories.filter(
      (item) => item.categoryId === posting.categoryId,
    )
    return res[0]?.name
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
  useEffect(() => {
    setBgColor(getColorRandomly())
  }, [])

  if (!posting || !categories || !user || !pId || !bgColor) {
    return <p />
  }
  return (
    <Container>
      <PostDetail
        backgroundColor={bgColor}
        score={!posting.score ? '' : posting.score}
        categoryName={getCategoryName()}
        username={!user.userName ? '' : user.userName}
        date={posting?.selectedDate}
        like={posting?.isLiked}
        likeId={posting?.likeId}
        content={posting?.content}
        profileImage={
          user.profilePhotoUrl
            ? user.profilePhotoUrl
            : 'https://picsum.photos/200'
        }
        authorId={posting?.userId}
        // follow={isMine}
        imageUrl={
          posting.fileUrl ? posting.fileUrl : 'https://picsum.photos/200'
        }
        postId={posting?.postId}
        createdAt={posting?.createdAt}
        favorite={posting?.favorite}
      />
    </Container>
  )
}

export default Detail
