import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ArticlesCommentsCounter = ({ commentsCount }) => (
  <div>
    {commentsCount}  comentarios de ciudadanos
  </div>
)

ArticlesCommentsCounter.propTypes = {
  commentsCount: PropTypes.number.isRequired
}

export default ArticlesCommentsCounter
