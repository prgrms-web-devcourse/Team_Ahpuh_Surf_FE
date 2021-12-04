import { NoticeCard } from '../../components/domain'

export default {
  title: 'Domain/NoticeCard',
  component: NoticeCard,
  argTypes: {
    profileImage: {
      type: 'text',
      defaultValue: 'https://picsum.photos/200',
    },
    follower: {
      type: 'text',
      defaultValue: 'Summer Surfer',
    },
    type: {
      options: ['follow', 'like'],
      defaultValue: 'follow',
      control: {
        type: 'radio',
      },
    },
    imageUrl: {
      type: 'text',
      defaultValue: 'https://picsum.photos/200',
    },
  },
}
export const Default = (args) => {
  return <NoticeCard {...args} />
}
