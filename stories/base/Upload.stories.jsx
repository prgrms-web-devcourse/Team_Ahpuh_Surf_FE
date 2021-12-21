import { Upload } from 'components/base'

export default {
  title: 'base/Upload',
  component: Upload,
}

export const Default = (args) => (
  <Upload {...args}>
    <button type="button">Click me!</button>
  </Upload>
)

export const AccessFile = () => (
  <Upload>
    {(file) => <button type="button">{file ? file.name : 'Click me'}</button>}
    {/* children(file)로 부터 file을 받아 file이 있으면 file.name을 아니면 'Click me'를 보여주게 함 */}
  </Upload>
)

export const Droppable = () => (
  <Upload droppable>
    {(file, dragging) => (
      <div
        style={{
          width: 300,
          height: 100,
          border: '4px dashed #aaa',
          borderColor: dragging ? 'black' : '#aaa',
        }}>
        {file ? file.name : 'Click or drag file to this area'}
      </div>
    )}
  </Upload>
)
