import React from 'react'

import { variant } from 'styled-system'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Attribute = (props) => {
  return (
    <StyledAttribute compVariant={props.rootClassName}>
      <AttributePoints>{props.AttributePoints}</AttributePoints>
      <AttributeName>{props.AttributeName}</AttributeName>
    </StyledAttribute>
  )
}

const componentStyleVariants = variant({
  prop: 'compVariant',
  variants: {
    rootClassName: {
      height: '100%',
      'align-self': 'flex-start',
      margin: '0px',
      '@media(max-width: 479px)': {
        height: '100%',
      },
    },
    rootClassName1: {
      height: '100%',
      'align-self': 'flex-start',
      margin: '0px',
      '@media(max-width: 479px)': {
        height: '100%',
      },
    },
    rootClassName2: {
      height: '100%',
      'align-self': 'flex-start',
      margin: '0px',
      '@media(max-width: 479px)': {
        height: '100%',
      },
    },
    rootClassName3: {
      height: '100%',
      'align-self': 'flex-start',
      margin: '0px',
      '@media(max-width: 479px)': {
        height: '100%',
      },
    },
    rootClassName4: {
      height: '100%',
      'align-self': 'flex-start',
      margin: '0px',
      '@media(max-width: 479px)': {
        height: '100%',
      },
    },
    rootClassName5: {
      'align-self': 'flex-start',
      height: '100%',
      margin: '0px',
      '@media(max-width: 479px)': {
        height: '100%',
      },
    },
  },
})

const StyledAttribute = styled('div')(
  {
    flex: '0 0 auto',
    display: 'flex',
    'align-items': 'flex-end',
    'padding-left': '1px',
    'padding-right': '1px',
    'flex-direction': 'row',
  },
  componentStyleVariants
)

const AttributePoints = styled('span')({
  'font-size': '9px',
  'padding-top': '0px',
  'padding-left': '1px',
  'padding-right': '1px',
  'padding-bottom': '0px',
})

const AttributeName = styled('span')({
  'font-size': '6px',
  'padding-top': '0px',
  'padding-left': '1px',
  'padding-right': '1px',
  'padding-bottom': '0px',
})

Attribute.defaultProps = {
  rootClassName: '',
  AttributePoints: 'XX',
  AttributeName: 'xxx',
}

Attribute.propTypes = {
  rootClassName: PropTypes.string,
  AttributePoints: PropTypes.number,
  AttributeName: PropTypes.string,
}

export default Attribute