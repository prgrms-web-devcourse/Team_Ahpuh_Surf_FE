import { Badge } from 'components/base'
import Image from 'next/image'

export default {
  title: 'Component/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
}

export const Default = (args) => (
  <Badge {...args}>
    <Image
      src="https://picsum.photos/60"
      width={60}
      style={{ borderRadius: 8 }}
      alt="test이미지"
    />
  </Badge>
)

export const Position = (args) => (
  <Badge top={10} right={5} size={15} {...args}>
    <Image
      src="https://picsum.photos/60"
      width={100}
      style={{ borderRadius: '50%' }}
      alt="test이미지"
    />
  </Badge>
)
