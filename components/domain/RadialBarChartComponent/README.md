## 사용법

```jsx
import dynamic from 'next/dynamic'
import { sampleData } from '../SampleData/RadialChartComponent'
const RadialBarChart = dynamic(
  () => import('../components/domain/RadialBarChartComponent'),
  { ssr: false },
)
const Home = () => (
  <div>
    <RadialBarChart data={sampleData} />
  </div>
)
```