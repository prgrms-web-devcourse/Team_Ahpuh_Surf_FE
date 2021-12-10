import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { Text } from '../../base'

const InputItem = ({ title, textWidth, children }) => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  `
  return (
    <Container>
      <Text size={20} style={{ marginRight: 10, width: textWidth }}>
        {title}
      </Text>
      {children}
    </Container>
  )
}
InputItem.propTypes = {
  title: PropTypes.string.isRequired,
  textWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
InputItem.defaultProps = {
  textWidth: '20%',
}
export default InputItem
