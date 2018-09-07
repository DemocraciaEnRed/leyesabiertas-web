import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FooterBar = styled.div`
  min-width:800px;  
  margin-left:auto;
  margin-right:auto;
  height: 110px;
  display: flex;
  flex-wrap:wrap;
  flex-direction:column;
  box-sizing:border-box;
  margin-bottom: 8.5rem;
  > a {
    color: #2c4c61;
    display: inline-block;
    font-family: var(--medium);
    padding: 10px 10px;
    font-size: 1.6rem;
    width:200px;

    box-sizing:border-box;
  }
`

FooterBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default FooterBar
