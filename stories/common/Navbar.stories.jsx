import { Navbar } from 'components/common'

export default {
  title: 'common/Navbar',
  component: Navbar,
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    height: {
      control: { type: 'number' },
    },
    iconSize: {
      control: { type: 'number' },
    },
  },
}

export const Default = () => <Navbar />
export const Color = (args) => <Navbar {...args} />
