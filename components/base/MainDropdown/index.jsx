/* eslint-disable */
import { useCallback, useState, Children, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import * as Style from './style'

/*
  category data 형태
  {
    "categoryId":Long,
    "name":String,
    "isPublic":Boolean,
    "colorCode":String
  },


*/

const MainDropdown = ({
  selected,
  handleClick,
  data,
  width,
  height,
  fontSize,
  border,
  isObj,
  onChange,
  ...rest
}) => {
  const [selectedObj, setSelectedObj] = useState({
    name: 'SELECT',
  })
  const [listOpened, toggleList] = useState(false)

  const toggleDropdown = () => {
    toggleList(!listOpened)
  }

  // const handleClick = (item) => {
  //   setObj(
  //     isObj
  //       ? {
  //           ...item,
  //         }
  //       : `${item}`,
  //   )
  //   toggleList(false)
  // }

  // useEffect(() => {
  //   // eslint-disable-next-line no-unused-expressions
  //   onChange && onChange(selectedObj)
  // }, [selectedObj])

  return (
    <Style.DropdownWrapper width={width} fontSize={fontSize} {...rest}>
      <Style.SelectedWrapper
        height={height}
        border={border}
        onClick={toggleDropdown}>
        <Style.SelectedWord>{selected?.name}</Style.SelectedWord>
        <div style={{ flexShrink: '0' }}>
          {listOpened ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
      </Style.SelectedWrapper>
      <Style.ListWrapper
        className={listOpened ? 'opened' : 'closed'}
        itemCnt={data.length}>
        <ul>
          {Children.toArray(
            data.map((item) => (
              <Style.ItemWrapper
                onClick={() => {
                  handleClick(item)
                  toggleList(false)
                }}>
                <Style.ItemContent>
                  {isObj ? item.name : item}
                </Style.ItemContent>
              </Style.ItemWrapper>
            )),
          )}
        </ul>
      </Style.ListWrapper>
    </Style.DropdownWrapper>
  )
}

MainDropdown.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  fontSize: PropTypes.number,
  border: PropTypes.bool,
  isObj: PropTypes.bool.isRequired,
}

MainDropdown.defaultProps = {
  width: 100,
  fontSize: 16,
  border: true,
}

export default MainDropdown
