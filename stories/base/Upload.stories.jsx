import Upload from '../../components/base/Upload'

export default {
  title: 'Component/Upload',
  component: Upload,
  argTypes: {
    size: {
      defaultValue: 100,
      control: { type: 'range', min: 80, max: 120 },
    },
  },
}

const textButtonStyle = {
  padding: 0,
  background: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  fontSize: '18px',
}

export const Default = () => (
  <Upload mode="text">
    <button type="button" style={textButtonStyle}>
      upload files...
    </button>
  </Upload>
)
