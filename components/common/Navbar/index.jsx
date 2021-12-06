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
  height: ${({ height }) => `${height}px`};
  padding: 10px 20px;
  border-top: 1px solid #eee;
  box-sizing: border-box;
  list-style: none;
  background-color: white;
`

const Navbar = ({ height, color, iconSize }) => (
  <NavbarWrapper height={height}>
    <li>
      <Link href="/" passHref>
        <a>
          <AiFillCompass size={iconSize} color={color} />
        </a>
      </Link>
    </li>
    <li>
      <Link href="/" passHref>
        <a>
          <AiFillPlusCircle size={iconSize * 1.6} color={color} />
        </a>
      </Link>
    </li>
    <li>
      <Link href="/" passHref>
        <a>
          <IoDocumentText size={iconSize} color={color} />
        </a>
      </Link>
    </li>
  </NavbarWrapper>
)

Navbar.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  iconSize: PropTypes.number,
}

Navbar.defaultProps = {
  color: '#373530',
  height: 50,
  iconSize: 30,
}

export default Navbar
