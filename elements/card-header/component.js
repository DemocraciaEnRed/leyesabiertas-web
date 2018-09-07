import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 368px;
height: 126px;
background-color: #a4cee8;
background-image: url('${(props) => props.img}');
overflow:hidden;
background-size: cover;
background-position: center;
`
const CardHeader = ({ img }) => (
  <Wrapper img={img} />
)

CardHeader.propTypes = {
  img: PropTypes.string
}
export default CardHeader
