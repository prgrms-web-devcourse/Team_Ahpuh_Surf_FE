import FollowCard from '../../components/domain/FollowCard'

export default {
  title: 'Domain/FollowCard',
  component: FollowCard,
  argTypes: {
    userName: {
      type: 'text',
      defaultValue: 'summer surfer',
    },
    profilePhotoUrl: {
      type: 'text',
      defaultValue: 'https://picsum.photos/200',
    },
  },
}
export const Default = (args) => {
  return <FollowCard {...args} />
}
