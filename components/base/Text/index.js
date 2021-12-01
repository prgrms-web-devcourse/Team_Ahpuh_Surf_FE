const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  deleteline,
  color,
  ...props
}) => {
  // eslint-disable-next-line no-nested-ternary
  const TextBox = block ? 'div' : paragraph ? 'p' : 'span'
  const fontStyle = {
    fontSize: size > 0 && size,
    fontWeight: strong && 'bold',
    textDecoration: underline && 'underline',
    color,
  }

  if (deleteline) {
    // eslint-disable-next-line no-param-reassign,react/jsx-filename-extension
    children = <del>{children}</del>
  }

  return (
    <TextBox {...props} style={{ ...props.style, ...fontStyle }}>
      {children}
    </TextBox>
  )
}

export default Text
