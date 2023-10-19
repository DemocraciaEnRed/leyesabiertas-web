import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import router from 'next/router'
import CardUserHeader from '../../elements/card-user-header/component'
import CardUserActions from '../../elements/card-user-actions/component'

const CardContainer = styled.div`
position: relative;
margin: 0 1% 30px;
width: 23%;
box-shadow: 0 4px 20px 0 rgba(0,0,0,0.05);
background-color: #FFF;
border: solid 1px #e9e9e9;
box-sizing: border-box;
display: flex;
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
@media (max-width: 1408px) {
  width: 31%;
  }
@media (max-width: 1216px) {
  width: 48%;
  }
@media (max-width: 600px) {
  width: 100%;
  }
${(props) => props.hasRole && `
  border: solid 2px #5c97bc;
  // box-shadow: 0 4px 20px 0 rgba(92,151,188,0.05);
  `}
`

const UserTagsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
`

const UserTag = styled.div`
  font-size: 10px;
  background-color: #5c97bc;
  color: #FFF;
  padding: 2px 6px 1px 4px;
  font-family: var(--bold);
  // text-transform: uppercase;
  border-top-right-radius: 4px;
`

const CardUser = ({ user }) => {
  const edit = () => {
    router.push(`/admin?section=userEdit&user=${user._id}`)
  }
  const projects = () => {
    router.push(`/admin?section=projects&user=${user._id}`)
  }

  if (!user || !user._id) return null

  const userHasRole = user && user.roles && Array.isArray(user.roles) && user.roles.length > 0 && (user.roles.includes('admin') || user.roles.includes('accountable'))
  return (
    <CardContainer hasRole={userHasRole}>
      {
        userHasRole && <UserTagsWrapper hasRole={userHasRole}>
          {
            user && user.roles && user.roles.includes('admin') && <UserTag >Admin</UserTag>
          }
          {
            user && user.roles && user.roles.includes('accountable') && <UserTag>Diputado</UserTag>
          }
        </UserTagsWrapper>
      }
      <CardUserHeader userId={user._id} name={user.fullname} party={user.fields.party} />
      <CardUserActions edit={edit} projects={projects} />
    </CardContainer>
  )
}

CardUser.propTypes = {
  user: PropTypes.object.isRequired

}

export default CardUser
