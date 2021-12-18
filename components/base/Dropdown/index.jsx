import { useCallback, useState, Children, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import * as Style from './style'

const Dropdown = ({
  data = [],
  width,
  height,
  fontSize,
  border,
  isObj,
  onChange,
  isNew,
  ...rest
}) => {
  const isInitialMount = useRef(true)
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
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(selectedObj)
  }, [selectedObj, onChange])

  useEffect(() => {
    if (isInitialMount.current) {
      isNew && data.push({ name: '+ New' })
    } else {
      isInitialMount.current = false
    }
  }, [data])

  return (
    <Style.DropdownWrapper width={width} fontSize={fontSize} {...rest}>
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
            data?.map((item) => (
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
  width: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.number,
  border: PropTypes.bool,
  isObj: PropTypes.bool.isRequired,
  isNew: PropTypes.bool,
}

Dropdown.defaultProps = {
  width: 100,
  height: 30,
  fontSize: 16,
  border: true,
  isNew: false,
}

export default Dropdown
