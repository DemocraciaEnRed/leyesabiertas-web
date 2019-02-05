import styled from 'styled-components'

const StaticInfoNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 247px;
  @media(max-width:700px){
    display:none;
  }
  padding-left: 15px;
  border-left:1px solid #dae1e7;
`
export default StaticInfoNav
