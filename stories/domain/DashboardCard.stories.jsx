import { DashboardCard } from 'components/domain'

export default {
  title: 'Domain/DashboardCard',
  component: DashboardCard,
  argTypes: {
    categoryName: {
      defaultValue: 'React ❤️',
      type: 'text',
    },
    score: {
      defaultValue: 90,
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
    recordAmount: {
      defaultValue: 15,
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
}
export const Default = (args) => {
  return <DashboardCard {...args} />
}
