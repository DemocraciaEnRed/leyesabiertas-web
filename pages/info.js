import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import NavBar from '../containers/navbar/component'
import SecondaryNavbar from '../containers/secondary-navbar/component'
import StaticInfo from '../components/static-info/component'
import SecondaryFooter from '../containers/secondary-footer/component'
import Footer from '../containers/footer/component'

class Info extends Component {
  state = {
    section: null
  }

  componentDidMount () {
    if (this.props.router.query.section) {
      this.setState({
        section: this.props.router.query.section
      })
    } else {
      this.setState({
        section: 'como-participar'
      })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const { query } = this.props.router
    if (query.section !== prevProps.router.query.section) {
      this.setState({
        section: query.section
      })
    }
  }

  changeSection = (section) => {
    this.setState({
      section: section
    })
  }

  render () {
    return (
      <div>
        <NavBar />
        {/* <SecondaryNavbar /> */}
        <StaticInfo
          section={this.state.section}
          changeSection={this.changeSection} />
        <SecondaryFooter />
        <Footer />
      </div>
    )
  }
}

Info.propTypes = {
  section: PropTypes.string
}

export default withRouter(Info)
