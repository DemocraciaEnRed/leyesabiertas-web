import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParticipateItem = styled.div`
  width: 370px;
  height: 380px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;
  box-sizing: border-box;
  &:nth-child(odd) {
      padding-left:1rem;
      padding-right:1rem;
    }
`

const participateItem = ({ children }) => (
  <ParticipateItem>
    { children }
  </ParticipateItem>
)

participateItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
export default participateItem
