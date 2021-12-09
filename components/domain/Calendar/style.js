const { default: styled } = require('@emotion/styled')

export const CalendarWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 45px;
  width: 350px;
  border-radius: 6px;
  box-shadow: 0 3px 3px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 999;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`

export const NavButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: #eee;
  }
`

export const WeekWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Cell = styled.button`
  flex: 0 0 calc(100% / 7);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  outline: none;
  border: none;
  transition: background-color 200ms;

  &:not(.week-cell):hover {
    cursor: pointer;
    &:not(.today) {
      background-color: #eee;
    }
  }

  &[class~='today'] {
    background-color: #c1ddeb;
  }

  &[class~='active'] {
    font-weight: 700;
  }
`
