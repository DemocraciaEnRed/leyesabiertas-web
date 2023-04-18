import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  list-style:none;
  padding-left:0;
  white-space: nowrap;
  @media(max-width:928px){
    flex-direction: column;
   
  }
  @media(max-width:760px){
    flex-direction: column;
    font-size: 2.6rem;
    align-items: flex-start;
    width:100%
  }
  > div {
    @media(max-width:760px){
      border-bottom: 1px solid #D6D6D6;
      width:100%;
      display: flex;
      justify-content: space-between
      align-items:center
      flex-wrap: wrap;

    }
      > a {
       color: #203340;
       display: inline-block;
       padding: 10px 20px;
       font-size: 1.6rem;
       flex-grow: 1
       @media(max-width:928px){
        flex-direction: column;
        padding-left: 0;
       
      }
       @media(max-width:760px){
         font-size: 2.6rem;
         padding-left: 48px;
         padding-bottom: 12px
   
        }
       &:last-child{
         padding-right:0px;
       }

     }
     > i {
      padding-right:16px
      cursor:pointer
    }
  }
`
const LinkBar = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
)

LinkBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default LinkBar
