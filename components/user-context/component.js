import React from 'react'

const UserContext = React.createContext({
  keycloak: null,
  authenticated: false,
  login: null,
  isAuthor: null,
  isAdmin: null
})

export default UserContext
