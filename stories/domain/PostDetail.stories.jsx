import { PostDetail } from 'components/domain'

export default {
  title: 'Domain/PostDetail',
  component: PostDetail,
  argTypes: {
    backgroundColor: {
      type: 'color',
      defaultValue: 'skyblue',
    },
    categoryName: {
      type: 'text',
      defaultValue: '📝 React Study',
    },
    score: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
      defaultValue: 90,
    },
    title: {
      type: 'text',
      defaultValue: 'This is a Card title',
    },
    imageUrl: {
      type: 'image',
      defaultValue: 'https://picsum.photos/400/200',
    },
    follow: {
      type: 'boolean',
      defaultValue: false,
    },
    like: {
      type: 'boolean',
      defaultValue: false,
    },
    date: {
      type: 'date',
      defaultValue: '2021-10-21',
    },
    content: {
      type: 'text',
      defaultValue:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ",
    },
    profileImage: {
      type: 'image',
      defaultValue: 'https://picsum.photos/200',
    },
    username: {
      type: 'text',
      defaultValue: 'kelvin Harris',
    },
  },
}

export const Default = (args) => {
  return <PostDetail {...args} />
}
