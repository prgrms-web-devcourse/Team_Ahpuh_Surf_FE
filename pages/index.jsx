import styled from '@emotion/styled'
import { Avatar } from 'components/base'

const HomeWrapper = styled.div`
  background-color: orange;
`

const Home = () => (
  <div>
    <HomeWrapper>Hello</HomeWrapper>
    <Avatar src="/../public/sample.jpeg" alt="test" width="100" height="100" />
  </div>
)
export default Home
