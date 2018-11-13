import styled from 'styled-components'

const StaticInfoWrapper = styled.div`
  width: 1200px;
  background-color: white;
  display: flex;
  padding: 80px 32px 123px 62px;
  margin-top: 108px;
  @media (min-width: 1024px) {
    > section {
      min-width: 850px;
    }
  }
`

export default StaticInfoWrapper
