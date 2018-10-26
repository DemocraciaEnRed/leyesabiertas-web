import styled from 'styled-components'
import StaticInfo from '../../components/static-info/component';

const StaticInfoHeader = styled.header`
  width: 100%;
  height: 250px;
  background-image: url('${(props) => props.img}')
`

export default StaticInfoHeader