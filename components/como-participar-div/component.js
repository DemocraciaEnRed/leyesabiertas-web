import React from 'react'
import StaticInfoDiv from '../../elements/static-info-div/component'
import StaticInfoSubtitle from '../../elements/static-info-subtitle/component'
import StaticInfoP from '../../elements/static-info-p/component'

export default (props) => (
  <StaticInfoDiv>
    <StaticInfoSubtitle>
      <span>{props.number}</span>
      {props.title}
    </StaticInfoSubtitle>
    <StaticInfoP>
      {props.text}
    </StaticInfoP>
  </StaticInfoDiv>
)
