import SkeletonBox from '../../components/domain/SkeletonBox'

export default {
  title: 'Domain/SkeletonBox',
  component: SkeletonBox,
  argTypes: {
    text: {
      type: 'text',
      defaultValue: 'loading',
    },
    width: {
      type: 'number',
      defaultValue: 200,
    },
    height: {
      type: 'number',
      defaultValue: 100,
    },
    borderRadius: {
      type: 'number',
      defaultValue: 10,
    },
    fontSize: {
      type: 'number',
      defaultValue: 20,
    },
    color: {
      type: 'text',
      defaultValue: 'darkGray',
    },
  },
}
export const Default = (args) => {
  return <SkeletonBox {...args} />
}
