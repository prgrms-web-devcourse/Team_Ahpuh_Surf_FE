import PropTypes from 'prop-types'
import React, { useEffect, forwardRef } from 'react'
import theme from 'styles/theme'

const Input = forwardRef(
  (
    {
      width,
      height,
      validate,
      fontSize,
      placeholder,
      type,
      maxLength,
      name,
      ...props
    },
    ref,
  ) => {
    const inputStyle = {
      width,
      height,
      fontSize,
      paddingLeft: '15px',
      border: '1px solid #C4C4C4',
      borderColor: validate ? theme.statusColor.$red : '#C4C4C4',
      borderRadius: '7px',
      backgroundColor: '#FFFFFF',
    }

    useEffect(() => {
      ref?.current.focus()
    }, [ref])

    return (
      <input
        ref={ref}
        style={{ ...props.style, ...inputStyle }}
        placeholder={placeholder}
        type={type}
        name={name}
        maxLength={maxLength}
        {...props}
      />
    )
  },
)
Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
}
Input.defaultProps = {
  width: 190,
  height: 40,
  fontSize: 16,
  placeholder: 'input text',
  type: 'text',
  maxLength: 999,
}

Input.displayName = 'Input'

export default Input
