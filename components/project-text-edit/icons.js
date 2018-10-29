import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Icon = styled.button`
  display: inline-block;
  padding: 5px;
  width: 30px;
  height: 30px;
  border: 0;
  opacity: .6;
  cursor: pointer;
  background: transparent;

  ${(props) => props.active && css`opacity: 1`}

  &:hover,
  &:focus {
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

const Svg = ({ children }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'>
    {children}
  </svg>
)

Svg.propTypes = { children: PropTypes.element }

const IconSvg = ({ children, ...props }) => (
  <Icon {...props}>
    <Svg>{children}</Svg>
  </Icon>
)

IconSvg.propTypes = { children: PropTypes.element }

export const BoldIcon = (props) => (
  <IconSvg {...props}>
    <g fill='none' fillRule='evenodd'>
      <path d='M0 0h32v32H0z' />
      <path fill='#FFF' fillRule='nonzero' d='M14 18v6h3a3 3 0 0 0 0-6h-3zm8.84-3.848A9 9 0 0 1 17 30H8V2h8a8 8 0 0 1 6.84 12.152zM14 8v4h2a2 2 0 1 0 0-4h-2z' />
    </g>
  </IconSvg>
)

export const ItalicIcon = (props) => (
  <IconSvg {...props}>
    <g fill='none' fillRule='evenodd'>
      <path d='M0 0h32v32H0z' />
      <path fill='#FFF' d='M16.103 26H22v4H6v-4h6.01l4.342-20H10V2h16v4h-5.554l-4.343 20z' />
    </g>
  </IconSvg>
)

export const UnderlineIcon = (props) => (
  <IconSvg {...props}>
    <g fill='none' fillRule='evenodd'>
      <path d='M0 0h32v32H0z' />
      <path fill='#FFF' d='M2 26h28v4H2v-4zm8-14a6 6 0 1 0 12 0V2h4v10c0 5.523-4.477 10-10 10S6 17.523 6 12V2h4v10z' />
    </g>
  </IconSvg>
)

export const TitleIcon = (props) => (
  <IconSvg {...props}>
    <g fill='none' fillRule='evenodd'>
      <path d='M0 0h32v32H0z' />
      <path fill='#FFF' d='M13 26V6H6v4H2V2h28v8h-4V6h-2 1-6v20h4v4H9v-4z' />
    </g>
  </IconSvg>
)
