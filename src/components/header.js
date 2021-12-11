import React from 'react'

import { variant } from 'styled-system'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TOKENS } from '../style'

const Header = (props) => {
  return (
    <StyledHeader compVariant={props.rootClassName}>
      <Text>
        <Text1>Rarity Interface</Text1>
      </Text>
      <Button projVariant="button" onClick={props.onClick}>{props.button}</Button>
    </StyledHeader>
  )
}

const projectStyleVariants = variant({
  'color': TOKENS.DlColorGrayblack,
  'display': 'inline-block',
  'padding': '0.5rem 1rem',
  'border-color': TOKENS.DlColorGrayblack,
  'border-width': '1px',
  'border-radius': '4px',
  'background-color': TOKENS.DlColorGraywhite,
})

const componentStyleVariants = variant({
  prop: 'compVariant',
  variants: {
    rootClassName: {},
  },
})

const StyledHeader = styled('div')(
  {
    width: '100%',
    height: '72px',
    display: 'flex',
    position: 'relative',
    'align-items': 'flex-start',
    'background-color': TOKENS.DlColorGray700,
  },
  componentStyleVariants
)

const Text = styled('h1')({
  margin: TOKENS.DlSpaceSpaceUnit,
  'align-self': 'flex-start',
  'font-family': 'Courier New',
  'text-transform': 'uppercase',
})

const Text1 = styled('span')({
  'font-family': 'Courier New',
})

const Button = styled('button')(projectStyleVariants, {
  top: '0px',
  right: '0px',
  margin: TOKENS.DlSpaceSpaceUnit,
  position: 'absolute',
  'font-style': 'normal',
  'font-weight': '700',
  'background-color': TOKENS.DlColorPrimary700,
  width: TOKENS.DlSizeSizeXlarge,
  'text-align': 'center',
})

Header.defaultProps = {
  rootClassName: '',
  button: 'Connect Wallet',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Header