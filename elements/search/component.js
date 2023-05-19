import styled from "styled-components";

const Search = styled.input`
display: inline-block;
margin: 0 5px;
font-size: 1.5rem;
padding: 8px;
border-radius: 4px;
border: 1px solid #4C4C4E;
width:75%;
::placeholder{
  font-size:1.5rem;
}
&.disabled{
  color: #777;
  border-color: #777;
}
@media(max-width:700px){
  display: block;
  width:100%;
 }
`
export default Search