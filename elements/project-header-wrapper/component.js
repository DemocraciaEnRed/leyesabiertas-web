import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProjectHeaderWrapper = styled.div`
  width: 90%;
  min-height: 215px;
  padding: 3.4rem 3% 1.5rem 3%;
  background-color: var(--white);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 108px;
  @media (max-width: 700px) {
    > div{
      width:300px !important;
      display:flex;
      flex-direction:column;
      padding-left:10px;
    }
  }`

export default ProjectHeaderWrapper
