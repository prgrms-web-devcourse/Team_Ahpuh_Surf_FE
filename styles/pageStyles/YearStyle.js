import styled from "@emotion/styled"

export const ToggleBtn = styled.button`
  border: none;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  display: block;
  margin: 0 auto;

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
export const AllWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0;
`

export const FlickingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const TodayDate = styled.div`
  font-weight: 700;
`