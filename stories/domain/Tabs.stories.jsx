import { Tabs } from 'components/domain'

export default {
  title: 'domain/Tabs',
  component: Tabs,
  argTypes: {
    fontSize: {
      control: { type: 'range', min: 10, max: 50 },
    },
    panelFontSize: {
      control: { type: 'range', min: 10, max: 50 },
    },
  },
}

export const Default = (args) => {
  const labelSet = [
    { label: 'follow', query: 'userId' },
    { label: 'following', query: 'followingId' },
  ]
  return <Tabs labelSet={labelSet} {...args} />
}

export const FontSize = (args) => {
  const labelSet = [
    { label: '김치', query: 'kimchi' },
    { label: '고구마', query: 'sweet' },
    { label: '감자', query: 'potato' },
  ]
  return <Tabs labelSet={labelSet} fontSize={20} panelFontSize={35} {...args} />
}
