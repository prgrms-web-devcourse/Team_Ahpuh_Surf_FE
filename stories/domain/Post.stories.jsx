import Post from '../../components/domain/Post'

export default {
  title: 'Domain/Post',
  component: Post,
  argTypes: {
    isMine: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    width: {
      defaultValue: 320,
      control: { type: 'range', min: 40, max: 500 },
    },
    height: {
      defaultValue: 160,
      control: { type: 'range', min: 40, max: 400 },
    },
    backgroundColor: {
      defaultValue: 'skyblue',
      control: {
        type: 'color',
      },
    },
    date: {
      defaultValue: '2021-10-11',
      control: {
        type: 'date',
      },
    },
    categoryName: {
      defaultValue: 'React',
      control: {
        type: 'text',
      },
    },
    score: {
      defaultValue: 80,
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
    title: {
      defaultValue: 'First Article',
      control: {
        type: 'text',
      },
    },
    content: {
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus molestiae nisi nobis praesentium quia quidem sapiente sequi ut! Corporis cumque dolor expedita facere molestiae molestias officia quod sequi sit vel.',
      control: {
        type: 'text',
      },
    },
    like: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    favorite: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    profileImage: {
      defaultValue: 'https://picsum.photos/200',
    },
    username: {
      defaultValue: 'Kevin McKellister',
      control: {
        type: 'text',
      },
    },
    follow: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    createdAt: {
      defaultValue: '2021-06-25',
      control: {
        type: 'date',
      },
    },
  },
}

export const Default = (args) => {
  return <Post {...args} />
}
