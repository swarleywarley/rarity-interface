import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const SkillsBlank = (props) => {
  return (
    <Container>
      <SkillBlankRow>
        <SkillDescription>{props.skills_desc}</SkillDescription>
      </SkillBlankRow>
    </Container>
  )
}

const Container = styled('div')({
  width: '100%',
  height: '36px',
  display: 'flex',
  position: 'relative',
  'flex-direction': 'column',
  'justify-content': 'space-between',
})

const SkillBlankRow = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  height: '16px',
  display: 'flex',
  'align-items': 'flex-start',
})

const SkillDescription = styled('span')({
  height: '100%',
  'font-size': '6px',
  'margin-top': '4px',
  'margin-left': '4px',
  'margin-right': '4px',
  'margin-bottom': '4px',
})

SkillsBlank.defaultProps = {
  rootClassName: '',
  skills_desc: 'Lorem ipsum',
}

SkillsBlank.propTypes = {
  rootClassName: PropTypes.string,
  skills_desc: PropTypes.string,
}

export default SkillsBlank
