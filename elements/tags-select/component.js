import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import WithDocumentTagsContext from '../../components/document-tags-context/component'
// Paquete react-select - https://www.npmjs.com/package/react-select
import Select from 'react-select';

const WrapperDiv = styled.div`
  display: inline-block
  width: 100%;
  font-size: 1.4rem
`
const SelectTags = styled(Select)`
> *{
  border: none!important;
  border-radius:0!important;
  background:#F1ECEA!important;
  &:first-child{
    >*{
      padding-left:20px!important

    }
  }
/*   &:nth-child(3){
    margin-top:0;
  } */

}
`

class TagsSelect extends Component {
  static propTypes = {
    onTagChange: PropTypes.func.isRequired,
    selected : PropTypes.string,
  }

  state = {
    allTags: [],
    selectedOption: null,
  }
  /*
  async componentWillMount () {
    this.setState({
      allTags: (await this.props.fetchDocumentTags()).map(
        tag => ({ value: tag._id, label: tag.name })
      )
    })
  }
  */
  componentDidMount(){
    let firstValue = this.props.allTags.find((tag)=>{return tag.value == this.props.selected})
    this.setState({selectedOption: firstValue})
  }
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => this.props.onTagChange(selectedOption && selectedOption.value)
    );
  };

  render () {
    return (
      <WrapperDiv>
        <SelectTags
          className='react-select-container'
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={this.props.allTags}
          isSearchable={true}
          isClearable={true}
          placeholder={'Buscar...'}
        />
      </WrapperDiv>
    )
  }
}

//export default WithDocumentTagsContext(TagsSelect)
export default TagsSelect