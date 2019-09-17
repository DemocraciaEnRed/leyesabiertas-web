import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { plusCircle } from 'react-icons-kit/fa/plusCircle'
import { clockO } from 'react-icons-kit/fa/clockO'



const CardContainer = styled.div`
width: 31%;
margin: 0 1% 30px;
//box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
border: solid 1px #e9e9e9;
cursor: pointer;
display: block;
position: relative;
justify-content:center;
box-sizing: border-box;
cursor: pointer;
border: 4px dotted #5c97bc;
font-size: 2em;
opacity: 0.5;
&:hover{
  opacity: 1;
}
@media (max-width: 1100px) {
  width: 48%;
  }
@media (max-width: 760px) {
  width: 100%;
  }
`

const CardNewProjectContent = styled.div`
text-align: center;
padding: 80px 0px;

color: #5c97bc;
`

const spin = styled.p`
`

const CardNewProject = ({ create, loading }) => (
  <CardContainer>
    { loading
      ? <CardNewProjectContent>
        <Icon icon={clockO} size={32} /> <br />Cargando...
      </CardNewProjectContent>
      : <CardNewProjectContent onClick={create}>
        <Icon icon={plusCircle} size={32} /> <br />Nueva propuesta
      </CardNewProjectContent>
    }
  </CardContainer>
)

CardNewProject.propTypes = {
  create: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

export default CardNewProject
