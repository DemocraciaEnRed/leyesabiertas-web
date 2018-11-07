import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 25px 0;
  background-color: #fff;
  box-shadow: 0 -5px 20px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
  display: flex;
  justify-content: center;
  div {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

const StyledButton = styled.button`
  background-color: #5c97bc;
  border-radius: 21px;
  width: 180px;
  height: 42px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  float: right;
`

const SelectedComents = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #4a5d68
  display: flex;
  align-items: center;
`

const Count = styled.span`
  margin-right: 10px;
  font-size: 28px;
  font-weight: 900;
  color: #ef885d;
`

export default class Toolbar extends Component {
  static propTypes = {
    editor: PropTypes.any,
    onClick: PropTypes.func,
    newYoutubeId: PropTypes.string,
    editedYoutubeId: PropTypes.boolean,
    setEditedYoutubeId: PropTypes.func,
    fetchDocument: PropTypes.func
  }

  handleOnClick = () => {
    this.props.onClick(this.props.selectedCommentsIds, this.props.field, this.props.newYoutubeId, this.props.editedYoutubeId, this.props.setEditedYoutubeId, this.props.fetchDocument)
  }

  render () {
    return (
      <Container>
        <div>
          <SelectedComents>
            {
              this.props.selectedCommentsIds.length > 0 &&
                <><Count>{this.props.selectedCommentsIds.length}</Count> comentarios marcados como aportes</>
            }
          </SelectedComents>
          <StyledButton onClick={this.handleOnClick}>
            Guardar cambios
          </StyledButton>
        </div>
      </Container>
    )
  }
}
