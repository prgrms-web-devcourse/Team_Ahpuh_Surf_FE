import styled from '@emotion/styled'
import { Children, useEffect, useState } from 'react'
import { Post } from 'components/domain'
import { useGetRecentPosts } from 'utils/apis/post'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const Container = styled.div`
  padding: 0 20px;
`

const Explore = () => {
  const router = useRouter()
  const [cursorId, setCursorId] = useState(0)
  const { data: recentPosts, isLoading } = useGetRecentPosts(cursorId)
  const [target, setTarget] = useState(null)
  const [addedPosts, setAddedPosts] = useState([])

  const handleObserver = async ([entry]) => {
    if (entry.isIntersecting) {
      const { postId } = recentPosts[recentPosts.length - 1]
      setCursorId(postId)
    }
  }

  useEffect(() => {
    if (!Cookies.get('user')) {
      router.push('/login')
    }
  })

  useEffect(() => {
    if (recentPosts && addedPosts === []) {
      setAddedPosts(() => [...recentPosts])
    } else if (recentPosts && addedPosts !== []) {
      setAddedPosts(() => [...addedPosts, ...recentPosts])
    }
  }, [recentPosts])

  useEffect(() => {
    let observer

    if (target) {
      observer = new IntersectionObserver(handleObserver, {
        threshold: 0.5,
      })
      observer.observe(target)
    }

    return () => observer && observer.disconnect()
  }, [target])

  if (isLoading) {
    return <div>로딩중...</div>
  }

  return (
    <Container>
      {Children.toArray(
        addedPosts?.map((post) => (
          <Post
            isMine={false}
            profileImage={
              post.photoProfileUrl ? post.photoProfileUrl : undefined
            }
            userId={post.userId}
            postId={post.postId}
            likeId={post.likeId}
            username={post.userName}
            follow={post.followedUser}
            like={post.liked}
            date={post.selectedDate}
            createdAt={post.createdAt}
            categoryName={post.categoryName}
            content={post.content}
            score={post.score}
            backgroundColor={post.colorCode}
            key={post.postId}
            style={{ marginBottom: '10px' }}
          />
        )),
      )}
      {addedPosts && <div ref={setTarget} />}
    </Container>
  )
}

export default Explore
