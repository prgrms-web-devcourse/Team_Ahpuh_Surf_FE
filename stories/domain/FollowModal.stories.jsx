import FollowModal from '../../components/domain/FollowModal'

export default {
  title: 'Domain/FollowModal',
  component: FollowModal,
  argTypes: {
    visible: {
      type: 'boolean',
      defaultValue: true,
    },

    userId: {
      type: 'number',
    },
  },
}

export const Default = (args) => {
  return <FollowModal {...args} />
}
