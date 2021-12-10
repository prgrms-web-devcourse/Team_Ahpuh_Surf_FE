// import { data } from '../../components/domain/AreaChartComponent/sampleData'
import AreaChartComponent from '../../components/domain/AreaChartComponent'
import { sampleXNY1 } from '../../components/domain/AreaChartComponent/sampleXNY1'
import { sampleXNY2 } from '../../components/domain/AreaChartComponent/sampleXNY2'

export default {
  title: 'Domain/AreaChartComponent',
  component: AreaChartComponent,
}
export const Default = (args) => {
  const dataset = []
  dataset.push({ data: sampleXNY1, name: 'react' })
  dataset.push({ data: sampleXNY2, name: 'Vue' })
  return <AreaChartComponent {...args} data={dataset} isMyPage />
}
