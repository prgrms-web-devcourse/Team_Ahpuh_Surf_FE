import styled from '@emotion/styled'
import { Dropdown } from 'components/base'
import { Post } from 'components/domain'
import dynamic from 'next/dynamic'
import { Children } from 'react'
import { sampleData } from '../components/domain/AreaChartComponent/sampleXNY1'
import { sampleData2 } from '../components/domain/AreaChartComponent/sampleXNY2'
import { DUMMY_DATA_POST, FILTERING } from '../constants/PostData'

const ApexChart = dynamic(
  () => import('components/domain/AreaChartComponent'),
  {
    ssr: false,
  },
)

const dataset = []
dataset.push({ data: sampleData, name: 'react' })
dataset.push({ data: sampleData2, name: 'Vue' })

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`

const ChartHeader = styled.div`
  margin-bottom: 10px;
`
const HeatmapChart = dynamic(
  () => import('../components/domain/HeatmapChartComponent'),
  { ssr: false },
)

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
