import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ActivityIcon from '../../elements/activity-icon/component'
import BarTitle from '../../elements/dashboard-bar-title/component'
import BarActivitySubtitle from '../../elements/dashboard-bar-subtitle/component'
import TagsAdmin from '../../components/admin-tags/component'
import ProjectsAdmin from '../../components/admin-projects/component'
import UsersAdmin from '../../components/admin-users/component'

const StyledAdminSection = styled.div`
width:70%;
margin-left:auto;
margin-right:auto;
margin-top:2.5rem;
margin-bottom:2.5rem;
display:flex;
padding:16px;
//background:blue;
}

`



const AdminSection = (props) => {
  const content = {
    'tags':<TagsAdmin token={props.token}/>,
    'projects':<ProjectsAdmin token={props.token}/>,
    'users':<UsersAdmin token={props.token}/>
  
  }
    return(
          <StyledAdminSection id='admin-container'>
            {content[props.section]}
          </StyledAdminSection>
)}

AdminSection.propTypes = {
  section:PropTypes.string
}

export default AdminSection
