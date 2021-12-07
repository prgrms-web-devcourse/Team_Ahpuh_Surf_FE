import RadialBarChartComponent from '../../components/domain/RadialBarChartComponent'
import { sampleData } from '../../SampleData/RadialChartComponent'

export default {
  title: 'Domain/RadialBarChartComponent',
  component: RadialBarChartComponent,
}
export const Default = (args) => (
  <RadialBarChartComponent {...args} data={sampleData} />
)
