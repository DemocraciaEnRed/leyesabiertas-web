import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prototype } from 'jimp'

const ProgressBarWrapper = styled.div`
  margin: 0 15px;
  margin-top: 20px;
  border-radius: 50px;
  background-color: #c6c8ca;
  overflow: hidden;
  height: 20px;
  position:relative;
`

const RemainingDays = styled.span`
  width:100%
  font-size: 12px;
  font-family: var(--bold);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`

const Progress = styled.div`
background-color:#6CAAE4;
flex:1;
width:${(props) => props.progress}%;
height:30px;
transform: skewX(-10deg);

}

`

const LimitDate = styled(RemainingDays)`

`

const RemainingDate = (firstDate, secondDate) => {
  const date1 = new Date(firstDate)
  const date2 = new Date(secondDate)
  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays
}

const progress = (total, remaining) => {
  return remaining * 100 / total
}

const ProgressBar = ({ closingDate, creationDate, closed, remaining }) => (
  <ProgressBarWrapper>
    {closed ? <LimitDate>Finalizó el periodo para aportes</LimitDate>
      : <div>
        <Progress progress={progress(RemainingDate(closingDate, creationDate), RemainingDate(new Date(), closingDate))} />
        <RemainingDays>Dias restantes: {RemainingDate(new Date(), closingDate)} </RemainingDays>
      </div>
    }
  </ProgressBarWrapper>
)

ProgressBar.propTypes = {
  total: PropTypes.number,
  closed: PropTypes.bool,
  remaining: PropTypes.number
}

export default ProgressBar
