import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const ContentBox = ({ title, fontSize, children }) => {
  const Container = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid #bababa;

    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  `
  const Title = styled.div`
    width: 100%;
    background-color: rgba(207, 207, 207, 0.12);
    padding: 10px 0 10px 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `
  return (
    <Container>
      <Title style={{ fontSize }}>{title}</Title>
      {children}
    </Container>
  )
}

ContentBox.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
}
ContentBox.defaultProps = {
  fontSize: 15,
}
export default ContentBox
