import { Navbar } from 'components/common'

export default {
  title: 'common/Navbar',
  component: Navbar,
  argTypes: {
    control: { type: 'color' },
  },
}

export const Default = () => <Navbar />
export const Color = (args) => <Navbar {...args} />
