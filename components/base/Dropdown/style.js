import styled from '@emotion/styled'

export const DropdownWrapper = styled.div`
  position: relative;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
`

export const SelectedWrapper = styled.div`
  background-color: white;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  padding: 0 10px;
  border: ${({ theme: { grayColor }, border }) =>
    border ? `1px solid ${grayColor.$border}` : 'none'};
  color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: inherit;
`

export const SelectedWord = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ListWrapper = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 10px;
  padding: 0 10px;
  background-color: rgba(250, 250, 250);
  z-index: 999;

  &.opened {
    height: ${({ itemCnt }) => `${itemCnt * 40 + 2}px`};
    transition: ${({ itemCnt }) => `height ${itemCnt * 0.1}s ease`};
    overflow: hidden;
  }
  &.closed {
    height: 0px;
    overflow: hidden;
    transition: ${({ itemCnt }) => `height ${itemCnt * 0.1}s ease`};
  }
`

export const ItemWrapper = styled.li`
  height: 40px;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:last-child {
    border: none;
  }
`

export const ItemContent = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
`
