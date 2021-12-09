import { Upload, Text, Dropdown, Textarea } from 'components/base'
import { DatePicker } from 'components/domain'
import Image from 'next/image'
import UploadImage from 'public/images/upload.svg'
import { useState } from 'react'
import { DUMMY_DATA_CAT } from 'constants/DropdownData'
import dynamic from 'next/dynamic'
import theme from 'styles/theme'
import * as Style from './style'

const Slider = dynamic(() => import('components/domain/ScoreSlider'), {
  ssr: false,
})

const PostNew = () => {
  const [category, setCategory] = useState('')
  const handleChange = () => {
    console.log('onChange')
  }

  return (
    <Style.PostNewWrapper>
      <Style.UpperSide>
        <Upload width="100%" droppable onChange={handleChange}>
          {(file, dragging) => (
            <Style.Box
              style={{
                border: dragging
                  ? `3px solid ${theme.surfColor.$blue__3}`
                  : '3px solid #eee',
              }}>
              {file ? (
                <Style.TextCenter>{file.name}</Style.TextCenter>
              ) : (
                <Style.IconWrapper>
                  <Image
                    src={UploadImage}
                    alt="UploadImage"
                    width={30}
                    height={30}
                  />
                  <Text strong color="inherit" style={{ marginTop: '10px' }}>
                    click of drag file
                  </Text>
                </Style.IconWrapper>
              )}
            </Style.Box>
          )}
        </Upload>

        <Style.OptionWrapper>
          <Dropdown data={DUMMY_DATA_CAT || {}} isObj height={45} />
          <DatePicker />
        </Style.OptionWrapper>

        <Slider />
      </Style.UpperSide>
      <Style.BottomSide>
        <Textarea />
        <Style.Button type="submit">submit</Style.Button>
      </Style.BottomSide>
    </Style.PostNewWrapper>
  )
}

export default PostNew
