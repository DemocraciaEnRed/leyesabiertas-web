import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const StyledAdminDrawer = styled.div`
  width:20%;
  margin-left:auto;
  margin-right:auto;
  margin-top:2.5rem;
  margin-bottom:2.5rem;
  padding-right: 15px;
  border-right: 1px solid #dae1e7;

  }
`

const DrawerList = styled.div`
    display: flex;
    flex-direction: column;

`

const DrawerItem = styled.div`
cursor:pointer;
background: white;
border: none;
font-size: 1.6rem;
text-align: left;
padding: 15px;
color: #454246
&:not(:last-child)  {
border-bottom: solid 1px #dae1e7;
}
`

const buttons = [
    {
        'name': 'Tags',
        'value': 'tags'
    },
    {
        'name':'Proyectos',
        'value':'projects'
    },
    {
        'name':'Usuarios',
        'value':'users'
    }

]

const AdminDrawer = (props) => (
  <StyledAdminDrawer id='admin-drawer'>
    <DrawerList>
        {buttons.map((button,idx) =><DrawerItem  
          key={idx}
          onClick={() => props.changeSection(button.value)}>
        
            {button.name}
        </DrawerItem>)}
 
    </DrawerList>

  </StyledAdminDrawer>
)

AdminDrawer.propTypes = {
}

export default AdminDrawer
