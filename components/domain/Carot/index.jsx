import styled from '@emotion/styled'
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/all'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

const Text = styled.span`
  padding-left: 20px;
  padding-right: 20px;
  font-size: ${({ fontSize }) => `${fontSize}px`};
`

const Carot = ({
  width,
  height,
  fontSize,
  curQuarter,
  handleLeftCarot,
  handleRightCarot,
}) => (
  <Container width={width} height={height}>
    <VscTriangleLeft
      size={fontSize}
      onClick={handleLeftCarot}
      style={{ cursor: 'pointer' }}
    />
    <Text fontSize={fontSize}>Q{curQuarter}</Text>
    <VscTriangleRight
      size={fontSize}
      onClick={handleRightCarot}
      style={{ cursor: 'pointer' }}
    />
  </Container>
)

Carot.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.number,
}
Carot.defaultProps = {
  width: '100%',
  height: '30px',
  fontSize: 20,
}
export default Carot
