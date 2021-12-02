import Logo from '../../components/base/Logo'

export default {
  title: 'base/Logo',
  component: Logo,
  argTypes: {
    width: {
      control: { type: 'range', min: 10, max: 300, step: 10 },
    },
    italic: {
      control: { type: 'boolean' },
    },
  },
}

export const Default = (args) => <Logo {...args} />
