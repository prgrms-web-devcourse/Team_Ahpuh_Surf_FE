import { CategoryCard } from '../../components/domain'

export default {
  title: 'Domain/CategoryCard',
  component: CategoryCard,
  argTypes: {
    title: {
      defaultValue: 'Category title',
      type: 'text',
    },
  },
}
export const Default = (args) => {
  return <CategoryCard {...args} />
}
