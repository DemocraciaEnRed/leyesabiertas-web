import React from 'react'
import styled from 'styled-components'

const StyledNotifications = styled.div`
  height:40px;
  width:40px;
  display:flex;
  flex-wrap: nowrap;
  margin-right:3rem;
`

const Notification = styled.div`
  width: 20px;
  height: 24px;
  background-image: url(${'/static/assets/notification.svg'});
  background-size: cover;
  background-position: center;
  margin-top: 1rem;
  cursor: pointer;
`
const NotificationsCircle = styled.div`
  margin-top:3px;
  width: 20px;
  height: 20px;
  border-radius:50%;
  background: #ea5f5f;
  color: #fff;
  display:flex;
  align-items:center;
  justify-content:center;
`
const Notifications = ({ notifications }) => (
  <StyledNotifications>
    <Notification />
    { notifications && notifications > 0 (
      <NotificationsCircle>{'5'}</NotificationsCircle>
    ) }
  </StyledNotifications>
)

export default Notifications
