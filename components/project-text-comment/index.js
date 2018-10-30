/* eslint react/prop-types: 0 */

import React, { Component, Fragment } from 'react'
import CommentCounter from '../../elements/comment-counter/component'
import styled from 'styled-components'


const StyledCommentSpan = styled.span`
  background-color: white;
  background-color: rgba(92, 151, 188, .4);
  cursor:pointer;
`
const CommentCounterContext = React.createContext({
  addId: null,
  removeId: null,
})

class CommentCounterWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: 0,
      left: 0,
      ids: []
    }
  }

  handeOnClick = (e) => {
    this.props.onClick(this.state.ids)
  }

  updateMousePosition = (e) => {
    this.setState({
      top: e.pageY - 740,
      left: e.pageX - 100
    })
  }

  addId = (id) => (e) => {
    this.setState(({ ids }) => {
      if (ids.includes(id)) return
      const _ids = ids.concat([id])

      return { ids: _ids }
    })
  }

  removeId = (id) => (e) => {
    this.setState(({ ids }) => {
      if (!ids.includes(id)) return
      const _ids = ids.filter(_id => _id !== id)

      return { ids: _ids }
    })
  }

  render () {
    const { ids, top, left } = this.state
    const context = {
      removeId: this.removeId,
      addId: this.addId
    }
    const count = ids.length

    return (
      <Fragment>
        {
          count > 0 &&
            <CommentCounter
              count={count}
              top={top}
              left={left} />
        }
        <div
          onClick={this.handeOnClick}
          onMouseMove={this.updateMousePosition}>
          <CommentCounterContext.Provider value={context}>
            {this.props.children}
          </CommentCounterContext.Provider>
        </div>
      </Fragment>
    )
  }
}


class CommentMark extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: null
    }
  }

  render () {
    const id = this.props.mark.toJSON().data['data-id']
    return (
      <CommentCounterContext.Consumer>
        {
          (value) => 
            <StyledCommentSpan
              onMouseEnter={value.addId(id)}
              onMouseLeave={value.removeId(id)}>
              {this.props.children}
            </StyledCommentSpan>
        }
      </CommentCounterContext.Consumer>
    )
  }
}





export default (options) => {
  return {
    renderMark (props, editor, next) {
      if (props.mark.type === 'comment') return <CommentMark {...props} />
      return next()
    },
    renderEditor: (props, editor, next) => 
      <CommentCounterWrapper
        onClick={options.onClick}>
        { next() }
      </CommentCounterWrapper>
  }
}
