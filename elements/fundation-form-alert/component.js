import styled from 'styled-components'

const FundationFormAlert = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  line-height: 1.38rem;
  color: #4a5d68;
  padding: 63px 5%;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
  > p {
    min-width: 300px;
    flex-wrap: wrap;
    line-height: 1.3;
    display: inline;
  }
  > p > a {
    color: #5c97bc;
  }
`

export default FundationFormAlert
