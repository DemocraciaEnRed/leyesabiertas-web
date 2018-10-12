import React from 'react'
import UserContext from '../user-context/component'

const WithUserContext = (Component) => {
  return function WithUserContextComponent (props) {
    return (
      <UserContext.Consumer>
        {(value) => <Component {...props} authContext={value} />}
      </UserContext.Consumer>
    )
  }
}

export default WithUserContext
