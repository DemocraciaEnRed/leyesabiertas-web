import React from 'react'
import NavBar from '../containers/navbar/component'
import SecondaryNavbar from '../containers/secondary-navbar/component'
import Hero from '../containers/hero/component'
import Participate from '../containers/participate/component'
import About from '../containers/about/component'
import Footer from '../containers/footer/component'
import DashboardBar from '../containers/dashboard-bar/component'

export default () => (
  <div>
    <NavBar />
    <SecondaryNavbar />
    <Hero />
    <Participate />
    <About />
    <DashboardBar />
    <Footer />
  </div>
)
