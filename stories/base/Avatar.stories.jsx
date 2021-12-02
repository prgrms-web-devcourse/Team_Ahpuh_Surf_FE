import Avatar from 'components/base/Avatar'

export default {
  title: 'Base/Avatar',
  component: Avatar,
  argTypes: {
    src: { defaultValue: 'https://picsum.photos/200' },
    size: {
      defaultValue: 70,
      control: { type: 'range', min: 40, max: 200 },
    },
  },
}

export const Default = (args) => {
  return <Avatar {...args} />
}
