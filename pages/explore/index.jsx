import styled from '@emotion/styled'
import Link from 'next/link'
import dayjs from 'dayjs'
import { Children, useCallback, useEffect, useRef, useState } from 'react'
import { Post } from 'components/domain'
import { useGetRecentPosts } from 'utils/apis/post'

const Container = styled.div`
  padding: 0 20px;
`

const Explore = () => {
  let start = 0
  const countPerPage = 10
  const {
    data: allRecentPosts,
    mutate,
    isLoading,
  } = useGetRecentPosts({
    // refreshInterval: 3000,
  })
  const [recentPosts, setRecentPosts] = useState([])
  const [target, setTarget] = useState(null)

  const handleObserver = ([entry]) => {
    if (entry.isIntersecting) {
      const currentPages = countPerPage * start
      const scrolledPage = allRecentPosts?.slice(0, currentPages)
      console.log(allRecentPosts, 'allRecentPosts')
      console.log(countPerPage, start, 'page')
      setRecentPosts(scrolledPage)
      start += 1
      // mutate((posts) => [...scrolledPage, allRecentPosts])
    }
  }

  useEffect(() => {
    console.log(recentPosts, 'recentPosts')
  }, [recentPosts])

  useEffect(() => {
    console.log(allRecentPosts, 'allRecentPosts')

    setRecentPosts(recentPosts)
  }, [allRecentPosts, recentPosts])

  useEffect(() => {
    const scrolledPage = allRecentPosts?.slice(start, countPerPage)
    setRecentPosts(scrolledPage)
  }, [allRecentPosts])

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
        recentPosts?.map((post) => {
          const month = dayjs(post.selectedDate).format('M')

          return (
            // <Link key={user.userId} href={`/posts/${month}/${post.postId}`}>
            //   <a
            //     style={{
            //       display: 'block',
            //       backgroundColor: 'red',
            //       // textDecoration: 'none',
            //     }}>
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
            //   </a>
            // </Link>
          )
        }),
      )}
      <div ref={setTarget} />
    </Container>
  )
}

export default Explore
