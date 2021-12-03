import PropTypes from 'prop-types'
import React from 'react'

const Input = ({ width, height, placeholder, type, ...props }) => {
  const inputStyle = {
    width,
    height,
    paddingLeft: '15px',
    border: '1px solid #C4C4C4',
    borderRadius: '7px',
    backgroundColor: '#FFFFFF',
    fontSize: height - 20,
  }

  return (
    <input
      {...props}
      style={{ ...props.style, ...inputStyle }}
      placeholder={placeholder}
      type={type}
    />
  )
}
Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
}
Input.defaultProps = {
  width: 190,
  height: 40,
  placeholder: 'input text',
  type: 'text',
}
export default Input
