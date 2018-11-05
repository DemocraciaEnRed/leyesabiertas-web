import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ArticlesContext } from '../../containers/user-project-container/component'

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:200px;
  height:57px;
`
const ToggleItem = styled.div`
  font-size:12px;
  position: relative;
  width: 195px;
  height: 30px;
  border-radius: 100px;
  background-color: #f2f5f8;
  overflow: hidden;
  box-shadow: inset 0 0 2px 1px rgba(0,0,0,.05);
`
const StyledCheck = styled.input`
  position: relative;
  display: flex;
  justify-content:center;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 6;
  :checked ~  b {
    box-shadow: inset 0 0 0 20px #ef885d;
  }

  :checked ~ b {
    right: 2px;
    left: 82px;
    transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
    transition-property: left, right;
    transition-delay: .05s, 0s;
  }
`

const ItemOn = styled.b`
  position: absolute;
  color:#fff;
  display:flex;
  justify-content:center;
  padding-top:6px;
  width:110px; /*ancho del toggle superior*/
  left: 2px;
  top: 2px;
  bottom: 2px;
  right: 2px;
  background-color: #a0705d;
  border-radius: 36px;
  z-index: 1;
  transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
  transition-property: left, right;
  transition-delay: 0s, .05s;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  `
const ItemOff = styled.span` 
  position: absolute;
  color:#8797a1;
  display:flex;
  justify-content:flex-start;
  padding-top:8px;
  padding-left:10px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
  box-shadow: inset 0 0 0 2px rgba(0,0,0,.05);
  border-radius: 40px;
`
const Label = styled.div`
  width: 103px;
  height: 19px;
  font-size: 16px;
  font-family: var(--bold);
  color: #4a5d68;
  margin-bottom:5px;
`

class ProjectEditMode extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isEditOn: true }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState((state) => ({
      isEditOn: !state.isEditOn
    }))
  }

  render () {
    return (

      <ArticlesContext>
        {
          ({ isAuthor }) => isAuthor &&
          <Wrapper>
            <Label>Modo edición</Label>

            <div>
              <ToggleItem>
                <StyledCheck type='checkbox' />
                <ItemOn onClick={this.handleClick}>{ this.isEditOn ? 'Activado' : 'Desactivado' }</ItemOn>
                <ItemOff>Desactivado</ItemOff>
              </ToggleItem>
            </div>

          </Wrapper>

        }
      </ArticlesContext>
    )
  }
}

export default ProjectEditMode
