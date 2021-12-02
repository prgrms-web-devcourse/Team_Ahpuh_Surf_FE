import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import logoNormalFill from 'assets/logo/logo_normal_fill.svg'
import logoItalicFill from 'assets/logo/logo_italic_fill.svg'

const LogoWrapper = styled.div`
  width: ${({ width }) => `${width}px`};
  aspect-ratio: ${({ svgWidth, svgHeight }) => `${svgWidth} / ${svgHeight}`};
  position: relative;
  cursor: pointer;
`

const Logo = ({ width, italic }) => {
  const { width: svgWidth, height: svgHeight } = italic
    ? logoItalicFill
    : logoNormalFill

  return (
    <Link href="/" passHref>
      <LogoWrapper width={width} svgWidth={svgWidth} svgHeight={svgHeight}>
        <Image
          src={italic ? logoItalicFill.src : logoNormalFill.src}
          layout="fill"
          alt="Surf"
        />
      </LogoWrapper>
    </Link>
  )
}

Logo.propTypes = {
  width: PropTypes.number,
  italic: PropTypes.bool,
}

Logo.defaultProps = {
  width: 100,
  italic: false,
}

export default Logo
