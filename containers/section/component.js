import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSection = styled.section`
    margin-left: ${(props) => props.noMargin ? '0em' : '5em'};
    padding: 8.4rem 4.3rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    background-color: #f6f6f6;
    > h2 {
        color: #2c4c61;
      }
    }
`

const Section = ({ id, children, noMargin }) => (
  <StyledSection id={id} noMargin={noMargin} >
    { children }
  </StyledSection>
)

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  noMargin: PropTypes.bool
}

export default Section
