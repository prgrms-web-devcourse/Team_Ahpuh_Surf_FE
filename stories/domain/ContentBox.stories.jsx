import ContentBox from '../../components/domain/ContentBox'

export default {
  title: 'Domain/ContentBox',
  component: ContentBox,
  argTypes: {
    title: {
      type: 'text',
      defaultValue: 'title Sample',
    },
  },
}
export const Default = (args) => {
  return <ContentBox {...args} />
}
