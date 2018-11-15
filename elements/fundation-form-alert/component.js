import styled, { css } from 'styled-components'

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
  ${(props) => props.articles && css`
    padding: 0;
    margin: 0 0 4.8rem;
    justify-content: flex-start;
  `}
  > p {
    min-width: 300px;
    flex-wrap: wrap;
    line-height: 1.3;
    display: inline;
    margin-left: ${(props) => props.articles && '1.5rem'};
  }
  > p > a {
    color: #5c97bc;
  }
`

export default FundationFormAlert
