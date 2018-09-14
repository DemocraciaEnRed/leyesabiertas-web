import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParticipateTextbox = styled.div`
  width: 370px;
  min-height: 100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  box-sizing: border-box;
`
const Span = styled.span`
  color:#ef885d;
  font-family:var(--bold);
  font-size:4rem;
  padding-right:1rem;
`
const H2 = styled.div`
  font-size:3rem;
  font-family:var(--bold);
  color:#5c97bc;
  padding-top:.5rem;

  `

const H3 = styled.div`
  font-size:2.2rem;
  color:#2c4c61;
  line-height:6rem;
`
const ActionWrapper = styled.div`
  display:flex;

`

const participateTextbox = ({ number, action, description }) => (
  <ParticipateTextbox>
    <ActionWrapper>
      <Span>{number}</Span>
      <H3>{action}</H3>
    </ActionWrapper>
    <H2>{description}</H2>
  </ParticipateTextbox>
)

participateTextbox.propTypes = {
  number: PropTypes.string,
  action: PropTypes.string,
  description: PropTypes.string
}

export default participateTextbox
