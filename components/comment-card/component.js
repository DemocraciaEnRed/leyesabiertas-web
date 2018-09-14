import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CommentCardContainer = styled.div`
width: 300px;
min-height: 305px;
border-radius: 9px;
box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
transition: 0.3s;
background-color: #ffffff;
border: solid 1px #e9e9e9;
display:flex;
flex-direction:column;
justify-content:space-between;
background: #fff;
box-sizing: border-box;
cursor: pointer;
border-bottom-left-radius:9px;
border-bottom-right-radius:9px;

`

const CommentCardContent = styled.div`
  width: 100%;
  height:170px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  box-sizing:border-box;
  padding-left:20px;
  background-color:#fff;
`
const CommentCardHeader = styled.div`
  background:var(--primary-color);
  height:40px;
  width:100%;
  border-top-left-radius:9px;
  border-top-right-radius:9px;
  font-size:1.3em;
  color: #fff;
  display:flex;
  align-items:center;
  text-transform:uppercase;
  padding-left:20px;
  box-sizing:border-box;
`

const CommentCardFooter = styled.div`
  width:100%;
  height:50px;
  border-bottom-left-radius:9px;
  border-bottom-right-radius:9px;
  border-top: 1px solid var(--gray);
  font-size:1.3em;
  font-weight:100;
  display:flex;
  align-items:center;
  box-sizing:border-box;
  padding-left:20px;
  color: var(--primary-color);
  font-size:1.6em;
`

const CommentCard = () => (
  <CommentCardContainer>
    <CommentCardHeader>Agregar comentario</CommentCardHeader>
    <CommentCardContent />
    <CommentCardFooter>Enviar comentario </CommentCardFooter>

  </CommentCardContainer>
)

export default CommentCard
