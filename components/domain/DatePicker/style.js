import styled from '@emotion/styled'

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
`
export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}px`};
  padding: 0 10px;
  border: 1px solid ${({ theme: { grayColor } }) => grayColor.$border};
  border-radius: ${({ borderRadious }) =>
    typeof borderRadious === 'string' ? borderRadious : `${borderRadious}px`};

  cursor: pointer;
`
