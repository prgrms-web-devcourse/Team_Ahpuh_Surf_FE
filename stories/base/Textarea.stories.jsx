import { Textarea } from 'components/base'

export default {
  title: 'Base/Textarea',
  component: Textarea,
  argTypes: {
    width: {
      control: { type: 'range', max: 500, min: 10, step: 10 },
    },
    height: {
      control: { type: 'range', max: 500, min: 10, step: 10 },
    },
    fontSize: {
      control: { type: 'range' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
}

export const Default = (args) => <Textarea {...args} />
