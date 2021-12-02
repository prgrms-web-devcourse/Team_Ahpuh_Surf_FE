import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`

const Super = styled.sup`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 0;
  background-color: #f44;
  border-radius: 50%;
`

const Badge = ({ children, top, right, size, backgroundColor, ...props }) => {
  const badgeStyle = {
    top,
    right,
    backgroundColor,
    width: size,
    height: size,
  }

  return (
    <BadgeContainer {...props}>
      {children}
      <Super style={badgeStyle} />
    </BadgeContainer>
  )
}

Badge.propTypes = {
  children: PropTypes.element.isRequired,
  top: PropTypes.number,
  right: PropTypes.number,
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
}

Badge.defaultProps = {
  top: 0,
  right: 0,
  size: 10,
  backgroundColor: '#f44',
}

export default Badge
