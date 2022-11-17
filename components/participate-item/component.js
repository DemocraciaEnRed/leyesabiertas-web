import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParticipateItem = styled.div`
  width: 33%;
  height: 200px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  box-sizing: border-box;
  @media (max-width: 1060px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width:700px){
    padding-left:auto!important;
    padding-right:auto!important;
    border-left:none!important;
    border-right: none!important;
    margin-left:0!important;
    margin-right: 0!important;
  }
  &:nth-child(even) {
      padding-left:1rem;
      padding-right:1rem;
      border-left:1px solid #dae1e7;
      border-right:1px solid #dae1e7;
      margin-left:.5rem;
      margin-right:.5rem;
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
