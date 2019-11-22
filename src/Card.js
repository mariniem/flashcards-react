import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from './Button'
import Bookmark from './Bookmark'

export default function Card({
  question,
  answer,
  toggleBookmarked,
  isBookmarked,
}) {
  const [isHidden, setIsHidden] = useState(true)
  const buttonText = isHidden ? 'Show answer' : 'Hide answer'
  const onButtonClick = () => setIsHidden(!isHidden)

  return (
    <CardWrapper>
      <Bookmark active={isBookmarked} onClick={toggleBookmarked} />
      <p>{question}</p>
      <Answer active={!isHidden}>{answer}</Answer>
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </CardWrapper>
  )
}

const Answer = styled.p`
  transition: all 0.3s;
  max-height: ${props => (props.active ? '100px' : '0')};
  overflow-y: hidden;
`

const CardWrapper = styled.section`
  padding: 20px;
  border-radius: 10px;
  background: #efefef;
  box-shadow: 0 10px 10px #0002;
  position: relative;
`

Card.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  toggleBookmarked: PropTypes.func.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
}
