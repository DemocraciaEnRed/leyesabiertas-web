import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import ProjectBar from '../../elements/project-bar/component'
import ProjectHeader from '../../components/project-header/component'
import ProjectBody from '../../components/project-body/component'
import CommentCard from '../../components/comment-card/component'

const result = { 'id': { '$oid': '5ba111d5fc13ae13f600109a' }, 'img': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJfSURBVDjLpVNNiFJRFD6O4j8EMpoMTGU6LUbCMJAmmFzYQpjViIgkSNtoldDOzUCbCIJA2rlpNv4thiCY5dSmNJOiYhwRJ8nIMdT8/3nq7ZxH7/GaoE33cbjn3ne+737nnHtljDH4n6E4vZFMJg04RZB4C2cLznK0MtoLXD8JhUI/pPEyqQIEb2s0ml2n06kzGo2gVCr5/clkAo1GA/L5/KDf798Oh8MZEUQEZIlEwp3NZtlgMGAcx7HhcMja7TZrtVqs2+2y8XjMEMxisRgLBoNeAbdEJAjWa7XaXbvdDnK5HHq9HiABIBFMp1NAIDSbTcjlclCtVmGxWDwNBAJ6wi79FhJxOByrKpUKUAEFwHw+503w0+k0RKNR0Ol0YDAYqDb3RQIM8ppMJj5XCp7NZiIB+ZlMhurD+6VSCfR6Pcn3igS4cNHpo9FIBApGJwtgUnN4eAgUi75LbKPQCalsMjo5lUrx/4V9wRcwAkEOT9+gtlEaUrBARgD7nYsglylg+GlIsJy0Bvv1eh3UarUom8DSVOx3rWBZs8DKeTN8t/Gd2JfW4HGhUPhKLSuXy2LOvGz8Lt9bgwuWc2BdRhKTFZbNBhhutm+5H1xTijcxHo+7O53OQa1WA7wTUCwWoVKpgC28CiqTAs6eMYNt5RJM51M4/vYF8u/fjicT7uUfV9nv92/j+hn2WU/9ppqQClJWXT8Cz1UPT3Dw+hWcnDQ28g8/vJGdfo0+n8+AexF0tzDPdfRH6B+Pbvy84rl+E7g5B3vP9+Ddo4+yvx7Tv8bmjouhZODGdL05+Bw74gl+AetZvIbkaCwtAAAAAElFTkSuQmCC', 'commentaries': 20, 'limitDate': '7/7/2018', 'title': 'sagittis nam congue risus semper porta volutpat', 'tagTitle': 'justo morbi ut', 'author': { 'name': 'Sherie Kulver', 'party': 'erat fermentum justo nec condimentum neque sapien placerat ante nulla justo', 'avatarImg': 'https://robohash.org/voluptassuntdolor.jpg?size=50x50\u0026set=set1' }, 'version': 5, 'createdAt': '6/27/2018' }

class ProjectContainer extends Component {
  state = {
    project: result
  }
/*
  async componentDidMount () {
    try {
      const project = await (await fetch(`https://my.api.mockaroo.com/projects/${this.props.project}.json?key=${API_KEY}`)).json()
      this.setState({ project })
    } catch (error) {
      console.error(error)
    }
  }
*/
  render () {
    const { project } = this.state
    if (!project) return null
    return (
      <div>
        <ProjectBar />
        <ProjectHeader project={project} />
        <ProjectBody project={project} />
      </div>
    )
  }
}

ProjectContainer.propTypes = {
  project: PropTypes.string.isRequired
}

export default ProjectContainer
