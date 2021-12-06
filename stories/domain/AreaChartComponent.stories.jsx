// import { data } from '../../components/domain/AreaChartComponent/sampleData'
import AreaChartComponent from '../../components/domain/AreaChartComponent'
import { sampleData } from '../../components/domain/AreaChartComponent/sampleXNY1'
import { sampleData2 } from '../../components/domain/AreaChartComponent/sampleXNY2'

export default {
  title: 'Domain/AreaChartComponent',
  component: AreaChartComponent,
}
export const Default = (args) => {
  const dataset = []
  dataset.push({ data: sampleData, name: 'react' })
  dataset.push({ data: sampleData2, name: 'Vue' })
  return <AreaChartComponent {...args} data={dataset} />
}
