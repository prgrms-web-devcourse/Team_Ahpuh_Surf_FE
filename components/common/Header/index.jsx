import styled from '@emotion/styled'
import { Avatar, Logo } from 'components/base'
import sample from 'public/sample.jpeg'


const HeaderWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px 15px;
`

const Header = () => (
  <HeaderWrapper>
    <Logo width={90} />
    <Avatar src={sample} size={40} alt="프로필" />
  </HeaderWrapper>
)

export default Header
