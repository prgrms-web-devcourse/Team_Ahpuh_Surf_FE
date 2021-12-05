import styled from '@emotion/styled'

export const Container = styled.div`
  display: inline-block;
  position: relative;
`
export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}px`};
  padding: 0 10px;
  border: 1px solid #eee;
  cursor: pointer;
`
