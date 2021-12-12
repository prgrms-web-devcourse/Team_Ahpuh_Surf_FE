import { useCallback, useState, Children, useEffect } from 'react'
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

const Dropdown = ({
  data,
  width,
  height,
  fontSize,
  border,
  isObj,
  onChange,
}) => {
  const [selectedObj, setSelectedObj] = useState({
    name: 'SELECT',
  })
  const [listOpened, toggleList] = useState(false)

  const toggleDropdown = () => {
    toggleList(!listOpened)
  }

  const handleClick = useCallback((item) => {
    setSelectedObj(
      isObj
        ? {
            ...item,
          }
        : {
            name: `${item}`,
          },
    )
    toggleList(false)
  }, [])

  useEffect(() => {
    onChange && onChange(selectedObj)
  }, [selectedObj])

  return (
    <Style.DropdownWrapper width={width} fontSize={fontSize}>
      <Style.SelectedWrapper
        height={height}
        border={border}
        onClick={toggleDropdown}>
        <Style.SelectedWord>{selectedObj.name}</Style.SelectedWord>
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

Dropdown.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
  border: PropTypes.bool,
  isObj: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

Dropdown.defaultProps = {
  width: '100%',
  height: 45,
  fontSize: 16,
  border: true,
}

export default Dropdown
