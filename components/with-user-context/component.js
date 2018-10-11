import React from 'react'
import UserContext from '../user-context/component'

export function withUserContext (Component) {
  return function WithUserContextComponent (props) {
    return (
      <UserContext.Consumer>
        {(value) => <Component {...props} value={value} />}
      </UserContext.Consumer>
    )
  }
}
