import styled from '@emotion/styled'

export const CardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 90%;
  border: 1px solid black;
  border-radius: 10px;
`

export const Category = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 30px;
  font-weight: bold;
`
export const Score = styled.div`
  grid-column: 1/2;
  grid-row: 2/4;
  justify-self: center;
  align-self: center;
  font-size: 70px;
  font-weight: bold;
`
export const Record = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: end;
  font-size: 40px;
  font-weight: bold;
`
export const Text = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  align-self: center;
  padding-right: 10px;
  font-size: 40px;
  font-weight: bold;
`
