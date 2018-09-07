import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSection = styled.section`
    margin-left: 5rem;
    padding: 8.4rem 4.3rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    &:nth-child(odd) {
      background-color: #f2f5f8;
    }
    &:nth-child(even) {
      background-size: 60px 60px;
      background-image: linear-gradient(to right, #f2f5f8 1px, transparent 1px);
      > h2 {
        color: #2c4c61;
      }
    }
`

const Section = ({ children }) => (
  <StyledSection>
    { children }
  </StyledSection>
)

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Section
