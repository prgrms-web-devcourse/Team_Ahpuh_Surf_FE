import styled from '@emotion/styled'
import { Dropdown } from 'components/base'
import { Post } from 'components/domain'
import { Children } from 'react'

import { DUMMY_DATA_POST, FILTERING } from '../constants/PostData'

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`

const ChartHeader = styled.div`
  margin-bottom: 10px;
`

const ChartWrapper = styled.div`
  height: 46%;
  width: 100%;
`

const PostListWrapper = styled.div`
  /* padding: 10px; */
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(54% - 29px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const Main = () => (
  <MainWrapper>
    <ChartHeader>
      <Dropdown data={FILTERING} isObj border={false} />
    </ChartHeader>
    <ChartWrapper />
    <PostListWrapper>
      {Children.toArray(
        DUMMY_DATA_POST.map(
          ({ date, categoryName, score, title, content, profileImage }) => (
            // eslint-disable-next-line react/jsx-key
            <Post
              height={100}
              date={date}
              categoryName={categoryName}
              score={score}
              title={title}
              content={content}
              profileImage={profileImage}
            />
          ),
        ),
      )}
    </PostListWrapper>
  </MainWrapper>
)

export default Main
