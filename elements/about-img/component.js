import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImg = styled.div`
  height: 540px;
  width: 500px;
  background-color: #5c97bc;
  background-image:  url('${(props) => props.img}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;  
  box-sizing: border-box;
  @media (max-width: 700px) {
    height: 300px;
    width: auto;
    
  }

`
const AboutImg = ({ img }) => (
  <StyledImg img={img} />
)

AboutImg.propTypes = {
  img: PropTypes.string
}

export default AboutImg
