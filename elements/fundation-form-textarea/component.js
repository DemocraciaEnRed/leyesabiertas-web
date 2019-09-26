import styled, { css } from 'styled-components'

const FundationFormTextarea = styled.textarea`
  margin: 15px 0 4px;
  width: 100%;
  height: 150px;
  border: ${(props) => props.error ? 'solid 1px #c64343' : 'solid 1px #dae1e7'};
  background-color: #ffffff;
  resize: none;
  font-size: 1.6rem;
  padding: 1rem;
  line-height: 2.1rem;
`

export default FundationFormTextarea
