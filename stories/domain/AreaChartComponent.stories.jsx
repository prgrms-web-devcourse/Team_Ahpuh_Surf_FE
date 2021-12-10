import AreaChartComponent from 'components/domain/AreaChartComponent'
import { areaChartComponent1 } from 'utils/SampleData/AreaChartComponent1'
import { areaChartComponent2 } from 'utils/SampleData/AreaChartComponent2'

export default {
  title: 'Domain/AreaChartComponent',
  component: AreaChartComponent,
}
export const Default = (args) => {
  const dataset = []
  dataset.push({ data: areaChartComponent1, name: 'react' })
  dataset.push({ data: areaChartComponent2, name: 'Vue' })
  return <AreaChartComponent {...args} data={dataset} isMyPage />
}
