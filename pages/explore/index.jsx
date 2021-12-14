import styled from '@emotion/styled'
import Link from 'next/link'
import dayjs from 'dayjs'
import { Children, useEffect } from 'react'
import { Post } from 'components/domain'
import { Explores } from 'utils/SampleData/Explores'

const Container = styled.div`
  padding: 0 20px;
`

const Explore = () => {
  const test = 1

  return (
    <Container>
      {Children.toArray(
        Explores.map(({ user, post }) => {
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
              profileImage={user.profileUrl ? user.profileUrl : undefined}
              username={user.username}
              follow={user.follow}
              date={post.selectedDate}
              createdAt={post.createdAt}
              categoryName={post.categoryName}
              content={post.content}
              score={post.score}
              backgroundColor={post.colorCode}
              key={user.userId}
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
