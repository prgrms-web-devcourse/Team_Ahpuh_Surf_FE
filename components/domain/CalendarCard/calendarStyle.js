const { default: styled } = require('@emotion/styled')

export const CalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ isLight, theme: { fontColor } }) =>
    isLight ? fontColor.$font : 'white'};
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
  color: inherit;
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

export const WeekHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  margin-bottom: 10px;
  color: inherit;

  & > .week-cell {
    font-weight: 700;
  }
`

export const WeekWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 10px;
  justify-content: center;
  color: inherit;
`

export const Cell = styled.button`
  /* flex: 0 0 calc(100% / 7); */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  outline: none;
  border: none;
  transition: background-color 200ms;
  color: inherit;

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
