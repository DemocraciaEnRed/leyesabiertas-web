import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { plusCircle } from 'react-icons-kit/fa/plusCircle'
import { clockO } from 'react-icons-kit/fa/clockO'

const CardContainer = styled.div`
width: 370px;
height: 340px;
//box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
border: solid 1px #e9e9e9;
display:flex;
flex-direction:column;
justify-content:center;
box-sizing: border-box;
cursor: pointer;
text-align: center;
border: 4px dotted #5c97bc;
color: #5c97bc;
opacity: 0.5;
font-size: 2em;
&:hover{
  opacity: 1;
}
`
const spin = styled.p`

`

const CardNewProject = ({ create, loading }) => (
  <div>
    { loading
      ? <CardContainer>
        <Icon icon={clockO} size={32} /> <br />Cargando...
      </CardContainer>
      : <CardContainer onClick={create}>
        <Icon icon={plusCircle} size={32} /> <br />Nueva propuesta
      </CardContainer>
    }
  </div>
)

CardNewProject.propTypes = {
  create: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

export default CardNewProject
