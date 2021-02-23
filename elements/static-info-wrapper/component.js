import styled from 'styled-components'

const StaticInfoWrapper = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  padding: 80px 32px 123px 62px;
  @media(max-width:700px){
    padding:20px;
  }
  margin-top: 108px;
  @media (min-width: 1024px) {
    > section {
      width: 90%;
      padding-left:10%;
    }
  }
`

export default StaticInfoWrapper
