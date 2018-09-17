import React from 'react'
import NavBar from '../containers/navbar/component'
import DashboardBar from '../containers/dashboard-bar/component'
import DashboardPublished from '../containers/dashboard-published/component'
import DashboardDrafts from '../containers/dashboard-drafts/component'
import Footer from '../containers/footer/component'

export default () => (
  <div>
    <NavBar />
    <DashboardBar />
    <DashboardDrafts />
    <DashboardPublished />
    <Footer />
  </div>
)
