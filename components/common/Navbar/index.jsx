import styled from '@emotion/styled'
import { AiFillCompass, AiFillPlusCircle } from 'react-icons/ai'
import { IoDocumentText } from 'react-icons/io5'
import PropTypes from 'prop-types'
import Link from 'next/link'

const NavbarWrapper = styled.ul`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  border-top: 1px solid #eee;
  box-sizing: border-box;
  list-style: none;
`

const Navbar = ({ color }) => (
  <NavbarWrapper>
    <li>
      <Link href="/" passHref>
        <a>
          <AiFillCompass size={37} color={color} />
        </a>
      </Link>
    </li>
    <li>
      <Link href="/" passHref>
        <a>
          <AiFillPlusCircle size={62} color={color} />
        </a>
      </Link>
    </li>
    <li>
      <Link href="/" passHref>
        <a>
          <IoDocumentText size={37} color={color} />
        </a>
      </Link>
    </li>
  </NavbarWrapper>
)

Navbar.propTypes = {
  color: PropTypes.string,
}

Navbar.defaultProps = {
  color: '#373530',
}

export default Navbar
