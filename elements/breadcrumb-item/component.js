import styled, { css } from 'styled-components'

const BreadcrumbItem = styled.a`
  font-size: 1.3rem;
  color: #ffffff;
  margin-right: 1rem;
  ${(props) => props.isActive && css`
    text-decoration: underline;
    &:not(:last-child)  {
      &:after {
        content: '/';
        margin-left: 1rem;
        text-decoration: none;
      }
    }
  `}
  &:not(:last-child)  {
    &:after {
      content: '/';
      margin-left: 1rem;
      text-decoration: none;
    }
  }
`

export default BreadcrumbItem
