import styled from 'styled-components'

const BreadcrumbWrapper = styled.div`
  width: 90%;
  display: flex;
  @media (max-width: 769px) {
    justify-content: space-around;
  }
`

const BreadcrumbNav = styled.nav`
  width: 100%;
  height: 40px;
  opacity: 0.8;
  background-color: #101a21;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { BreadcrumbWrapper }

export default BreadcrumbNav
