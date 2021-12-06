import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { sampleData } from '../components/domain/AreaChartComponent/sampleXNY1'
import { sampleData2 } from '../components/domain/AreaChartComponent/sampleXNY2'

const HomeWrapper = styled.div`
  background-color: orange;
`
const AreaChart = dynamic(
  () => import('components/domain/AreaChartComponent'),
  {
    ssr: false,
  },
)
// TODO: data 받으면 sampleXNY1 형태처럼 컨버팅 하고, dataset으로 만들어주는 hook 제작

const dataset = []
dataset.push({ data: sampleData, name: 'react' })
dataset.push({ data: sampleData2, name: 'Vue' })
const Home = () => (
  <div>
    <HomeWrapper>Hello</HomeWrapper>
    <AreaChart data={dataset} />
  </div>
)
export default Home
