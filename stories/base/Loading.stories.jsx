import { Loading } from 'components/base'
import CategoryManage from 'pages/CategoryManage'

export default {
  title: 'base/Loading',
  component: Loading,
  argTypes: {
    loading: {
      defaultValue: false,
      type: 'boolean',
    },
    size: {
      defaultValue: 150,
      control: { type: 'range', min: 50, max: 300 },
    },
    blur: {
      defaultValue: 12,
      control: { type: 'range', min: 0, max: 30 },
    },
  },
}

export const Default = (args) => <Loading {...args} />
export const OtherCompo = (args) => (
  <>
    <CategoryManage />
    <Loading {...args} />
  </>
)
