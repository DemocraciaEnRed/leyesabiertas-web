import React from 'react'
import NavBar from '../containers/navbar/component'
import SecondaryNavbar from '../containers/secondary-navbar/component'
import Hero from '../containers/hero/component'
import Projects from '../containers/projects/component'
import Participate from '../containers/participate/component'
import About from '../containers/about/component'
import Footer from '../containers/footer/component'

export default () => (
  <div>
    <NavBar />
    <SecondaryNavbar />
    <Hero />
    <Participate />
    <About />
    <Footer />
  </div>
)
