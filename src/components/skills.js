import React from 'react'

import { variant } from 'styled-system'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Skills = (props) => {
  return (
    <Container compVariant={props.rootClassName}>
      <SkillRow1>
        <SkillName>{props.skills_text}</SkillName>
        <SkillLevel>{props.skills_level}</SkillLevel>
      </SkillRow1>
      <SkillRow2>
        <SkillDescription>{props.skills_desc}</SkillDescription>
      </SkillRow2>
    </Container>
  )
}

const componentStyleVariants = variant({
  prop: 'compVariant',
  variants: {
    rootClassName: {},
    rootClassName1: {},
  },
})

const Container = styled('div')(
  {
    width: '100%',
    height: '36px',
    display: 'flex',
    position: 'relative',
    'flex-direction': 'column',
    'justify-content': 'space-between',
  },
  componentStyleVariants
)

const SkillRow1 = styled('div')({
  flex: '0 0 auto',
  height: '20px',
  display: 'flex',
  'align-self': 'stretch',
  'align-items': 'flex-start',
  'justify-content': 'space-between',
})

const SkillName = styled('span')({
  padding: '4px',
  'font-size': '10px',
  'align-self': 'center',
})

const SkillLevel = styled('span')({
  padding: '4px',
  'font-size': '10px',
  'align-self': 'center',
})

const SkillRow2 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  height: '16px',
  display: 'flex',
  'align-items': 'flex-start',
})

const SkillDescription = styled('span')({
  height: '100%',
  'font-size': '6px',
  'margin-top': '0px',
  'margin-left': '4px',
  'margin-right': '4px',
  'margin-bottom': '4px',
})

Skills.defaultProps = {
  rootClassName: '',
  skills_desc: 'Lorem ipsum',
  skills_text: 'Lorem ipsum',
  skills_level: '1',
}

Skills.propTypes = {
  rootClassName: PropTypes.string,
  skills_desc: PropTypes.string,
  skills_text: PropTypes.string,
  skills_level: PropTypes.string,
}

export default Skills
