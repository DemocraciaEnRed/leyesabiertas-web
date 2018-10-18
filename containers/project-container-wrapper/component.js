import React, { Fragment } from 'react'
import WithUserContext from '../../components/with-user-context/component'
import AuthorProjectContainer from '../author-project-container/component'
import UserProjectContainer from '../user-project-container/component'

const ProjectContainerWrapper = (props) => (
  <Fragment>
    {console.log(props.authContext)}
  </Fragment>
)

export default WithUserContext(ProjectContainerWrapper)
