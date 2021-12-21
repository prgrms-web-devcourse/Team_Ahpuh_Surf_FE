import styled from '@emotion/styled'
import { Children, useEffect, useState, useRef } from 'react'
import { Post } from 'components/domain'
import { useGetRecentPosts } from 'utils/apis/post'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { Loading } from 'components/base'

const Container = styled.div`
  padding: 0 20px;
`

const Explore = () => {
  const postId = useRef(0)
  const router = useRouter()
  const [cursorId, setCursorId] = useState(0)
  const { data: recentPosts } = useGetRecentPosts(cursorId)
  const [target, setTarget] = useState(null)
  const [addedPosts, setAddedPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleObserver = async ([entry]) => {
    if (entry.isIntersecting) {
      setCursorId(postId.current)
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
      postId.current = recentPosts[recentPosts.length - 1].postId
    } else if (recentPosts && addedPosts !== []) {
      setAddedPosts(() => [...addedPosts, ...recentPosts])
      postId.current = recentPosts[recentPosts.length - 1].postId
    }
    setIsLoading(true)
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

  return (
    <Container>
      {/* <Loading loading={isLoading} setLoading={setIsLoading} size={100} /> */}
      <Loading loading={isLoading} setLoading={setIsLoading} size={100} />
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
