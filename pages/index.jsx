import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { sampleData } from 'utils/SampleData/heatmapChart'

const HomeWrapper = styled.div`
  background-color: orange;
`
const HeatmapChart = dynamic(
  () => import('../components/domain/HeatmapChartComponent'),
  { ssr: false },
)

const Home = () => (
  <div>
    <HomeWrapper>Hello</HomeWrapper>
    <HeatmapChart data={sampleData} height={250} width="100%" />
  </div>
)
export default Home
