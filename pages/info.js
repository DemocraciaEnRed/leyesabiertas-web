import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../containers/navbar/component'
import SecondaryNavbar from '../containers/secondary-navbar/component'
import StaticInfo from '../components/static-info/component'
import SecondaryFooter from '../containers/secondary-footer/component'
import Footer from '../containers/footer/component'

class Info extends Component {
  static async getInitialProps ({ query }) {
    const section = query.section
    return { section }
  }

  state = {
    section: null
  }

  componentDidMount () {
    if (this.props.section) {
      this.setState({
        section: this.props.section
      })
    } else {
      this.setState({
        section: 'como-participar'
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
        <SecondaryNavbar />
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

export default Info
