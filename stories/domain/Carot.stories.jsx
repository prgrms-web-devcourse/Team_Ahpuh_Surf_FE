import Carot from '../../components/domain/Carot'

export default {
  title: 'Domain/Carot',
  component: Carot,
  argTypes: {
    width: {
      type: 'string',
      defaultValue: '100%',
    },
    height: {
      type: 'string',
      defaultValue: '10%',
    },
    fontSize: {
      type: 'number',
      defaultValue: 15,
    },
    items: {
      type: 'array',
    },
  },
}
export const Default = (args) => {
  return <Carot {...args} />
}
