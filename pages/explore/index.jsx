import styled from '@emotion/styled'
import Link from 'next/link'
import dayjs from 'dayjs'
import { Children, useEffect } from 'react'
import { Post } from 'components/domain'
import { useGetFollowingPosts } from 'utils/apis/follow'

const Container = styled.div`
  padding: 0 20px;
`

const Explore = () => {
  let lastPostId = 0
  const { data: followingPosts } = useGetFollowingPosts(lastPostId)
  useEffect(() => {
    console.log(followingPosts, 'followingPosts')
  }, [followingPosts])

  return (
    <Container>
      {Children.toArray(
        followingPosts?.values?.map((followingPost) => {
          const month = dayjs(followingPost.selectedDate).format('M')

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
                followingPost.photoProfileUrl
                  ? followingPost.photoProfileUrl
                  : undefined
              }
              username={followingPost.userName}
              follow={true}
              like={followingPost.isLiked}
              date={followingPost.selectedDate}
              createdAt={followingPost.createdAt}
              categoryName={followingPost.categoryName}
              content={followingPost.content}
              score={followingPost.score}
              backgroundColor={followingPost.colorCode}
              key={followingPost.categoryName}
              style={{ marginBottom: '10px' }}
            />
            //   </a>
            // </Link>
          )
        }),
      )}
    </Container>
  )
}

export default Explore
