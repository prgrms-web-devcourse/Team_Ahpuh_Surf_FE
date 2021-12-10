import HeatmapChartComponent from 'components/domain/HeatmapChartComponent'
import { heatmapSampleData } from 'utils/SampleData/heatmapChart'

export default {
  title: 'Domain/HeatmapChartComponent',
  component: HeatmapChartComponent,
  argTypes: {
    width: {
      type: 'number',
    },
    height: { type: 'number' },
  },
}
export const Default = (args) => (
  <HeatmapChartComponent {...args} data={heatmapSampleData} />
)
