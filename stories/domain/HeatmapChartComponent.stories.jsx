import HeatmapChartComponent from '../../components/domain/HeatmapChartComponent'
import { sampleData } from '../../SampleData/heatmapChart'

export default {
  title: 'Domain/HeatmapChartComponent',
  component: HeatmapChartComponent,
}
export const Default = (args) => (
  <HeatmapChartComponent {...args} data={sampleData} />
)
