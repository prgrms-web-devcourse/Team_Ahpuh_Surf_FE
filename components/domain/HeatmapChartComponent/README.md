## 사용법
```jsx
import dynamic from 'next/dynamic'
import { sampleData } from '../SampleData/heatmapChart'

const HeatmapChart = dynamic(
  () => import('../components/domain/HeatmapChartComponent'),
  { ssr: false },
)
const Home = () => (
  <div>
    <HeatmapChart data={sampleData} height={350} />
  </div>
)
```