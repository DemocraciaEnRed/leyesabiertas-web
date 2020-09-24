import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import WithDocumentTagsContext from '../../components/document-tags-context/component'
// Paquete react-select - https://www.npmjs.com/package/react-select
import Select from 'react-select';

const WrapperDiv = styled.div`
  display: inline-block
  width: 200px
  font-size: 1.4rem
`

class TagsSelect extends Component {
  static propTypes = {
    onTagChange: PropTypes.func.isRequired
  }

  state = {
    allTags: [],
    selectedOption: null,
  }

  async componentWillMount () {
    this.setState({
      allTags: (await this.props.fetchDocumentTags()).map(
        tag => ({ value: tag._id, label: tag.name })
      )
    })
  }

  handleChange = selectedOption => {
    //console.log(`Option selected:`, selectedOption);
    this.setState(
      { selectedOption },
      () => this.props.onTagChange(selectedOption && selectedOption.value)
    );
  };

  render () {
    return (
      <WrapperDiv>
        <Select
          className='react-select-container'
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={this.state.allTags}
          isSearchable={true}
          isClearable={true}
          placeholder={'Buscar...'}
        />
      </WrapperDiv>
    )
  }
}

export default WithDocumentTagsContext(TagsSelect)
