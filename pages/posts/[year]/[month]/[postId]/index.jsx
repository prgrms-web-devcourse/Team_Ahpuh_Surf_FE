<<<<<<< Updated upstream:pages/posts/[month]/[postId]/index.jsx
=======
/* eslint-disable */

import { PostDetailSampleData } from 'utils/SampleData/PostDetail'
>>>>>>> Stashed changes:pages/posts/[year]/[month]/[postId]/index.jsx
import theme from 'styles/theme'
import { PostDetail } from 'components/domain'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useGetPost } from 'utils/apis/post'
import { useGetCategories } from 'utils/apis/category'
import useGetUser from 'utils/apis/user/useGetUser'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import useGetFollowingList from 'utils/apis/follow/useGetFollowingList'

const Detail = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const router = useRouter()
  const [pId, setPId] = useState(null)
  const [bgColor, setBgColor] = useState(null)
  const [uId, setUid] = useState(null)
  useEffect(() => {
    if (!router.isReady) return
    const { postId } = router.query
    setPId(postId)
  }, [router.isReady])
  useEffect(() => {
    const { userId } = JSON.parse(Cookies.get('user'))
    setUid(userId)
  }, [])
  const { data: posting } = useGetPost(pId)
  const { data: categories } = useGetCategories() // categoryName 찾기 위해 사용
  const { data: user } = useGetUser(posting.userId)
  const { data: followingList } = useGetFollowingList(uId)
  const isUserFollow = () => {
    const res = followingList.filter((item) => item.userId === posting.userId)
    return res[0]?.userId === posting.userId
  }
  const getCategoryName = () => {
    const res = categories.filter(
      (item) => item.categoryId === posting.categoryId,
    )
    return res[0]?.name
  }
  const isPostMine = () => uId === posting.userId
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

  if (
    !posting ||
    !categories ||
    !user ||
    !pId ||
    !bgColor ||
    !uId ||
    !followingList
  ) {
    return <p />
  }
  return (
    <Container>
      <PostDetail
<<<<<<< Updated upstream:pages/posts/[month]/[postId]/index.jsx
        backgroundColor={bgColor}
        score={!posting.score ? '' : posting.score}
        categoryName={getCategoryName()}
        username={!user.userName ? '' : user.userName}
        date={posting?.selectedDate}
        isLiked={posting?.isLiked}
        likeId={posting?.likeId}
        content={posting?.content}
        isFollow={isUserFollow()}
        isMine={isPostMine()}
        profileImage={
          user.profilePhotoUrl
            ? user.profilePhotoUrl
            : 'https://picsum.photos/200'
        }
        authorId={posting?.userId}
        imageUrl={
          posting.fileUrl ? posting.fileUrl : 'https://picsum.photos/200'
        }
        postId={posting?.postId}
        createdAt={posting?.createdAt}
        favorite={posting?.favorite}
=======
        backgroundColor={getColorRandomly()}
        score={score}
        categoryName="react" // TODO: api로부터 카테고리 이름도 같이 들어오면 좋겠음
        title={title}
        username="Kevin" // TODO: api로부터 유저네임 받으면 좋겟음
        date={selectedDate}
        like={false} // TODO: like 여부 api에 추가해야함
        content={content}
        // profileImage={}
        follow={isPostMine()} // TODO: api로부터 내꺼인지 받아온다음에 팔로우/언팔 내용 랜더링 여부 결정해야함
        // imageUrl={}
>>>>>>> Stashed changes:pages/posts/[year]/[month]/[postId]/index.jsx
      />
    </Container>
  )
}
<<<<<<< Updated upstream:pages/posts/[month]/[postId]/index.jsx

=======
>>>>>>> Stashed changes:pages/posts/[year]/[month]/[postId]/index.jsx
export default Detail
