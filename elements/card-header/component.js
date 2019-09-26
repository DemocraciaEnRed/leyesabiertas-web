import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit/Icon'
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash'
const Wrapper = styled.div`
width: 100%;
height: 126px;
background-color: #1b95ba;
background-image: url('${(props) => props.img}');
overflow:hidden;
background-size: cover;
background-position: center;
// position: relative;
`

const Label = styled.span`
  position: absolute;
  top: 13px;
  left: 10px;
  width: 95px;
  height: 20px;
  border-radius: 4px;
  background-color: #fee282;
  font-size: 1.0rem;
  font-weight: 500;
  color: #000;
  padding: 5px 8px;
  text-transform: uppercase;
  align-self: flex-end;
  margin-bottom: 8px;
  position: relative;
  bottom: 7px
`

const CardHeader = ({ img, published }) => (
  <Wrapper img={img}>
    { !published && <Label><Icon icon={eyeSlash} style={{ verticalAlign: 'text-bottom', marginRight: '5px' }} size={14} />Oculto</Label>}
  </Wrapper>
)

CardHeader.propTypes = {
  img: PropTypes.string,
  published: PropTypes.bool
}
export default CardHeader
