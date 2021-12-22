import { PostDetail, SkeletonBox } from 'components/domain'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useGetPost } from 'utils/apis/post'
import { useGetFollowingList } from 'utils/apis/follow'
import { useGetCategories } from 'utils/apis/category'
import useGetUser from 'utils/apis/user/useGetUser'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const Detail = () => {
  const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const router = useRouter()
  const [pId, setPId] = useState(null)
  const [uId, setUid] = useState(null)
  const [selectedMonth, setMonth] = useState(null)
  const [selectedYear, setYear] = useState(null)
  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    if (!router.isReady) return
    const { year, month, postId } = router.query
    setYear(year)
    setMonth(month)
    setPId(postId)
  }, [router.isReady])

  useEffect(() => {
    const { userId } = JSON.parse(Cookies.get('user'))
    setUid(userId)

    setTimeout(() => {
      setShowSkeleton(false)
    }, 1000)
  }, [])

  const { data: posting } = useGetPost(pId)
  const { data: categories } = useGetCategories()
  const { data: user } = useGetUser(posting.userId)
  const { data: followingList } = useGetFollowingList(uId)

  const isUserFollow = () => {
    const res = followingList.filter((item) => item.userId === posting.userId)
    return res[0]?.userId === posting.userId
  }
  const getCategoryInfo = () => {
    const res = categories.filter(
      (item) => item.categoryId === posting.categoryId,
    )
    return res[0]
  }
  const isPostMine = () => uId === posting.userId
  // eslint-disable-next-line consistent-return

  if (!posting || !categories || !user || !pId || !uId || !followingList) {
    return <p />
  }
  return (
    <Container>
      {showSkeleton && (
        <SkeletonBox
          position="absolute"
          style={{ top: 0, left: 0, zIndex: 999, margin: '0 20px' }}
          width="91%"
          height="100%"
          borderRadius={10}
          text="Loading"
          color="darkGray"
        />
      )}
      <PostDetail
        backgroundColor={getCategoryInfo()?.colorCode}
        score={!posting.score ? '' : posting.score}
        categoryName={getCategoryInfo()?.name}
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
            : '/images/avatarDefault.png'
        }
        authorId={posting?.userId}
        fileUrl={posting?.fileUrl}
        imageUrl={
          posting?.imageUrl
            ? posting.imageUrl
            : 'https://via.placeholder.com/250x150/d0d0d3/a9a9a9/?text=No+Image'
        }
        postId={posting?.postId}
        createdAt={posting?.createdAt}
        favorite={posting?.favorite}
        year={selectedYear}
        month={selectedMonth}
        selectedDate={posting?.selectedDate}
      />
    </Container>
  )
}

export default Detail
