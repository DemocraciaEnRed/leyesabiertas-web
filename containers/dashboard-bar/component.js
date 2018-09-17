import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ActivityIcon from '../../elements/activity-icon/component'
import BarTitle from '../../elements/dashboard-bar-title/component'
import BarActivitySubtitle from '../../elements/dashboard-bar-subtitle/component'
import DashboardBarItem from '../../components/dashboard-bar-item/component'
import DashboardBarTextContainer from '../../elements/dashboard-bar-text-container/component'

const StyledDashboardBar = styled.div`
  height:10rem;
  width:100%;
  margin-left:auto;
  margin-right:auto;
  margin-top:2.5rem;
  margin-bottom:2.5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  }
`

const DashboardBar = ({ children }) => (
  <StyledDashboardBar id='dashboard-bar'>

    <DashboardBarItem>
      <ActivityIcon img={'/static/assets/citizen-icon.svg'} link={'/'} />
      <DashboardBarTextContainer>
        <BarTitle>Proyectos más Activos</BarTitle>
        <BarActivitySubtitle number={3} itemStyle={'projects'} />
      </DashboardBarTextContainer>

    </DashboardBarItem>

    <DashboardBarItem>
      <ActivityIcon img={'/static/assets/comment-smiley-icon.svg'} link={'/'} />
      <DashboardBarTextContainer>

        <BarTitle>Actividad en Comentarios</BarTitle>
        <BarActivitySubtitle number={5} itemStyle={'commentaries'} />
      </DashboardBarTextContainer>

    </DashboardBarItem>

    <DashboardBarItem>
      <ActivityIcon img={'/static/assets/user-icon.svg'} link={'/'} />
      <DashboardBarTextContainer>

        <BarTitle>Nuevos usuarios</BarTitle>
        <BarActivitySubtitle number={11} itemStyle={'people'} />
      </DashboardBarTextContainer>

    </DashboardBarItem>

  </StyledDashboardBar>
)

DashboardBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default DashboardBar
