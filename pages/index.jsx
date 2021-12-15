import styled from '@emotion/styled'
import { Dropdown } from 'components/base'
import { Post } from 'components/domain'
import dynamic from 'next/dynamic'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect, Children } from 'react'
import { areaChartComponent1 } from '../utils/SampleData/AreaChartComponent1'
import { areaChartComponent2 } from '../utils/SampleData/AreaChartComponent2'
import { DUMMY_DATA_POST, FILTERING } from '../constants/PostData'

const ApexChart = dynamic(
  () => import('components/domain/AreaChartComponent'),
  {
    ssr: false,
  },
)

const dataset = []
dataset.push({ data: areaChartComponent1, name: 'react' })
dataset.push({ data: areaChartComponent2, name: 'Vue' })

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`

const ChartHeader = styled.div`
  padding: 10px 0;
`

const ChartWrapper = styled.div`
  height: 30%;
  width: 100%;
  margin-bottom: 5px;
`

const PostListWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(70% - 37px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
`

const Main = () => {
  useEffect(() => {
    if (Cookies.get('isSignup')) {
      toast.success('Signup was sucessful 🎉', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      })
    }
  }, [])
  return (
    <>
      <ToastContainer />
      <MainWrapper>
        <ChartHeader>
          <Dropdown data={FILTERING} isObj border={false} />
        </ChartHeader>
        <ChartWrapper>
          <ApexChart data={dataset} />
        </ChartWrapper>
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
    </>
  )
}

export default Main
