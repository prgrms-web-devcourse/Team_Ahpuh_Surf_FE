import Text from 'components/base/Text'

export default {
  title: 'Base/Text',
  component: Text,
  argTypes: {
    block: { control: 'boolean' },
    paragraph: { control: 'boolean' },
    size: { control: 'number' },
    strong: { control: 'boolean' },
    underline: { control: 'boolean' },
    deleteline: { control: 'boolean' },
    color: { control: 'color' },
  },
}

export const Default = (args) => {
  return (
    <div>
      <Text {...args}>Text1</Text>
      <Text {...args}>Text2</Text>
    </div>
  )
}
