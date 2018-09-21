import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UserAvatarLogged from '../../elements/user-avatar-logged/component'

const CommentCardContainer = styled.div`
  width: 300px;
  min-height: 305px;
  border-radius: 3px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  border: solid 1px #dae1e7;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  box-sizing: border-box;
  cursor: pointer;
  z-index:2;
  position: relative;
  left: 102%;
  bottom:900px;

`

const CommentCardContent = styled.div`
  display:flex;
  min-height:210px;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  box-sizing:border-box;
  padding-left:20px;
  padding-right:20px;
  background-color:#fff;
  padding-top:2rem;
`
const CommentCardHeader = styled.div`
  height: 40px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #5c97bc;
  font-size:1.3em;
  color: #fff;
  display:flex;
  align-items:center;
  padding-left:20px;
  box-sizing:border-box;
`

const CommentCardFooter = styled.div`
  height: 5.5rem;
  font-size: 1.4rem;
  color: #5c97bc;
  border-top: 1px solid #dae1e7;
  font-size:1.3em;
  display:flex;
  align-items:center;
  box-sizing:border-box;
  padding-left:20px;
`
const CommentText = styled.p`
  font-size:1.4rem;
  color: #181818;
`

const CommentCard = ({ project }) => (
  <CommentCardContainer>
    <CommentCardHeader>Agregar comentario</CommentCardHeader>
    <CommentCardContent>
      <UserAvatarLogged
        avatarImg={project.author.avatarImg}
        name={project.author.name} />
      <CommentText>Hola! Sugiero que cambien una palabra
para que esto pueda entenderse mejor.
El cambio sería en: Desagregación y cambiarla por Detalle, para que pueda leerse más rápido.</CommentText>
    </CommentCardContent>
    <CommentCardFooter>Enviar comentario </CommentCardFooter>

  </CommentCardContainer>
)

CommentCard.propTypes = {
  project: PropTypes.object.isRequired
}

export default CommentCard
