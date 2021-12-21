import { DatePicker } from 'components/domain'

export default {
  title: 'domain/DatePicker',
  component: DatePicker,
  argTypes: {
    width: {
      control: { type: 'range', min: 80, max: 600 },
    },
    height: {
      control: { type: 'range', min: 45, max: 100 },
    },
    borderRadious: {
      control: { type: 'range', min: 0, max: 50 },
    },
    fontSize: {
      control: { type: 'range', min: 10, max: 50 },
    },
    delimeter: {
      type: 'string',
    },
  },
}

export const Default = (args) => <DatePicker {...args} />
Default.parameters = {
  layout: 'centered',
}
