import React from 'react'

import { variant } from 'styled-system'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Attribute from '../components/attribute'
import Skills from '../components/skills'
import SkillsBlank from '../components/skills-blank'
import { TOKENS } from '../style'
import { CLASS_NAME, CLASS_IMAGE, CLASS_DEFAULT } from '../constants/class'
import { SKILLS } from '../constants/skills'


const Card = (props) => {
  return (
    <Container compVariant={props.rootClassName}>
      <CardHeader>
        <Class>{CLASS_NAME[props.class]}</Class>
        <Level>Lvl {props.level}</Level>
      </CardHeader>
      <ImageContainer>
        <Image src={CLASS_IMAGE[props.class]} />
      </ImageContainer>
      <Body>
        <SkillsList>
          {
            props.skills.length > 0 ? 
            props.skills.map((skill, i) => {
              return (
                <Skills 
                  key={i}
                  skills_text={SKILLS[skill.id].name} 
                  skills_level={skill.level.toString()} 
                  skills_desc={SKILLS[skill.id].check.split('.').splice(0, 1).join('')} 
                />
              )
            }) :
            <SkillsBlank skills_desc={CLASS_DEFAULT[props.class].split('.').splice(0, 2).join('')} />
          }
        </SkillsList>
      </Body>
      <Footer>
        <FooterRow1>
          <IdContainer>
            <Id>ID: {props.id}</Id>
          </IdContainer>
          <AttributeContainer>
            <Attribute
              AttributeName="gold"
              rootClassName="rootClassName6"
              AttributePoints={props.gold}
            ></Attribute>
            <Attribute
              AttributeName="xp"
              rootClassName="rootClassName7"
              AttributePoints={props.xp}
            ></Attribute>
          </AttributeContainer>
        </FooterRow1>
        <FooterRow2>
          <Attribute
            AttributeName="str"
            rootClassName="rootClassName5"
            AttributePoints={props.str}
          ></Attribute>
          <Attribute
            AttributeName="dex"
            rootClassName="rootClassName"
            AttributePoints={props.dex}
          ></Attribute>
          <Attribute
            AttributeName="con"
            rootClassName="rootClassName4"
            AttributePoints={props.con}
          ></Attribute>
          <Attribute
            AttributeName="int"
            rootClassName="rootClassName3"
            AttributePoints={props.int}
          ></Attribute>
          <Attribute
            AttributeName="wis"
            rootClassName="rootClassName2"
            AttributePoints={props.wis}
          ></Attribute>
          <Attribute
            AttributeName="cha"
            rootClassName="rootClassName1"
            AttributePoints={props.cha}
          ></Attribute>
        </FooterRow2>
      </Footer>
    </Container>
  )
}

const componentStyleVariants = variant({
  prop: 'compVariant',
  variants: {
    rootClassName: {},
    rootClassName1: {},
    rootClassName2: {},
    rootClassName3: {},
    rootClassName4: {},
    rootClassName5: {},
    rootClassName6: {},
    rootClassName7: {},
    rootClassName8: {},
    rootClassName9: {},
  },
})

const Container = styled('div')(
  {
    width: TOKENS.DlSizeSizeXlarge,
    height: TOKENS.DlSizeSizeXxlarge,
    margin: TOKENS.DlSpaceSpaceUnit,
    display: 'flex',
    'border-color': TOKENS.DlColorGrayBlack,
    'border-style': 'solid',
    'border-width': '4px',
    'border-radius': TOKENS.DlRadiusRadiusRadius4,
    'flex-direction': 'column',
    'justify-content': 'flex-start',
    'background-color': '#c9baa8',
    '@media(max-width: 479px)': {
      'border-radius': TOKENS.DlRadiusRadiusRadius8,
    },
  },
  componentStyleVariants
)

const CardHeader = styled('div')({
  flex: 'initial',
  width: '184px',
  height: '28px',
  display: 'flex',
  'align-items': 'flex-start',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'justify-content': 'space-between',
})

const Class = styled('span')({
  height: '100%',
  padding: TOKENS.DlSpaceSpaceHalfunit,
  'font-size': '12px',
  'align-self': 'center',
  'font-style': 'normal',
  'font-weight': '700',
})

const Level = styled('span')({
  height: '100%',
  padding: TOKENS.DlSpaceSpaceHalfunit,
  'font-size': '12px',
  'align-self': 'flex-start',
  'font-style': 'normal',
  'font-weight': '800',
})

const ImageContainer = styled('div')({
  flex: 'initial',
  width: '184px',
  height: '112px',
  display: 'flex',
  'align-items': 'flex-start',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'justify-content': 'center',
})

const Image = styled('img')({
  width: '100%',
  height: '100%',
  'align-self': 'center',
  'object-fit': 'cover',
  'border-radius': TOKENS.DlRadiusRadiusRadius4,
})

const Body = styled('div')({
  width: '184px',
  height: '112px',
  display: 'flex',
  'align-items': 'flex-start',
  'padding-top': '0px',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'border-radius': TOKENS.DlRadiusRadiusRadius4,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'padding-bottom': '0px',
  'justify-content': 'flex-start',
})

const SkillsList = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  height: '100%',
  display: 'flex',
  overflow: 'auto',
  'align-items': 'flex-start',
  'border-color': TOKENS.DlColorGrayBlack,
  'border-width': '1px',
  'border-radius': TOKENS.DlRadiusRadiusRadius4,
  'flex-direction': 'column',
  'justify-content': 'flex-start',
  'background-color': '#ceccb9',
})

const Footer = styled('div')({
  flex: '0 0 auto',
  width: '184px',
  height: '28px',
  display: 'flex',
  'align-items': 'flex-start',
  'padding-top': '2px',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'flex-direction': 'column',
  'padding-bottom': '2px',
  'justify-content': 'flex-start',
})

const FooterRow1 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  height: '50%',
  display: 'flex',
  'align-self': 'stretch',
  'align-items': 'center',
  'justify-content': 'space-between',
  '@media(max-width: 479px)': {
    height: '12px',
  },
})

const IdContainer = styled('div')({
  display: 'flex',
  'flex-direction': 'row',
  flex: '0 0 auto',
})

const Id = styled('span')({
  'font-size': '8px',
})

const AttributeContainer = styled('div')({
  display: 'flex',
  'flex-direction': 'row',
  height: 'auto',
  'align-items': 'space-between',
  flex: '0 0 auto',
  'justify-content': 'flex-end',
})

const FooterRow2 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  height: '50%',
  display: 'flex',
  'align-items': 'flex-start',
  'flex-direction': 'row',
  'justify-content': 'space-between',
})

Card.defaultProps = {
  image_src: 'b3ca61f1-1186-4bf0-ad9f-6a8261fd1de0',
  rootClassName: '',
  class: 'Barbarian',
  id: 'ID: 1234567',
  image_alt: 'image',
  attributes5: 'str',
  level: 'L2',
}

Card.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  class: PropTypes.number,
  id: PropTypes.number,
  image_alt: PropTypes.string,
  attributes5: PropTypes.string,
  level: PropTypes.number,
}

export default Card