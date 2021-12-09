import EditAboutMe from '../../components/domain/EditAboutMe'
import { sampleData } from '../../SampleData/Mypage'

export default {
  title: 'Domain/EditAboutMe',
  component: EditAboutMe,
  argTypes: {
    url: {
      type: 'text',
      defaultValue: sampleData.url,
    },
    aboutMe: {
      type: 'text',
      defaultValue: sampleData.aboutMe,
    },
    visible: {
      type: 'bool',
      defaultValue: true,
    },
  },
}
export const Default = (args) => <EditAboutMe {...args} />
