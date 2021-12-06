import { Dropdown } from 'components/base'
import { DUMMY_DATA_CAT, DUMMY_DATA_YEAR } from 'constants/DropdownData'

export default {
  title: 'Base/Dropdown',
  component: Dropdown,
  argTypes: {
    data: {
      control: { type: 'object' },
    },
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

export const Obj = (args) => <Dropdown data={DUMMY_DATA_CAT} isObj {...args} />
export const Arr = (args) => (
  <Dropdown data={DUMMY_DATA_YEAR} isObj={false} {...args} />
)
