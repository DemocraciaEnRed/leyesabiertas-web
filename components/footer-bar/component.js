import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FooterBar = styled.div`
  width:60%;
  font-family:var(--regular);
  margin-left:auto;
  margin-right:auto;
  height: 2rem;
  display: flex;
  justify-content:center;
  margin-bottom: 2rem;
  @media (max-width: 760px) {
    margin-bottom: 6rem;
  }
  > a {
    color: #2c4c61;
    display: inline-block;
    padding: 10px 15px;
    font-size: 1.6rem;
    max-width:220px;

    box-sizing:border-box;
    @media (max-width: 760px) {
      padding:10px 12px
    }
  }
`

FooterBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default FooterBar
