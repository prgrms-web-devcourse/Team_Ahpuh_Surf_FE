import Input from 'components/base/Input'

export default {
  title: 'Base/Input',
  component: Input,
  argTypes: {
    width: {
      defaultValue: 190,
      control: { type: 'range', min: 100, max: 600 },
    },
    height: {
      defaultValue: 40,
      control: { type: 'range', min: 20, max: 50 },
    },
  },
}

export const Default = (args) => {
  return <Input {...args} />
}
