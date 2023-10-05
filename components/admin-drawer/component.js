import React from 'react'
import styled from 'styled-components'


const StyledAdminDrawer = styled.div`
  margin-left:auto;
  margin-right:auto;
  margin-top:2.5rem;
  margin-bottom:2.5rem;
  padding-right: 15px;
  border-right: 1px solid #dae1e7;
  @media (max-width: 700px) {
    width:100%;
    border-right: none;
    margin-bottom:1.5rem;

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
        "key":1,
        'name': 'Etiquetas',
        'value': 'tags'
    },
    {
        "key":2,
        'name':'Proyectos',
        'value':'projects'
    },
    {
        "key":3,
        'name':'Usuarios',
        'value':'users'
    },
    {
      "key":4,
      'name':'Metricas',
      'value':'metric'
  }

]

const AdminDrawer = (props) => (
  <StyledAdminDrawer id='admin-drawer'>
    <DrawerList>
        {buttons.map((button,idx) =><DrawerItem  
          key={button.key}
          onClick={() => props.changeSection(button.value)}>
        
            {button.name}
        </DrawerItem>)}
 
    </DrawerList>

  </StyledAdminDrawer>
)

AdminDrawer.propTypes = {
}

export default AdminDrawer
