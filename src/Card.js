import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import Bookmark from './Bookmark'

export default function Card({ card, toggleBookmarked }) {
  const Card = styled.section`
    padding: 20px;
    margin: 20px;
    background: lightgrey;
    color: white;
    border-radius: 6px;
    box-shadow: 0 10px 10px #0002;
    position: relative;
  `
  const [showCard, setShowCard] = useState(false)
  return (
    <div>
      <Card>
        <Bookmark active={card.isBookmarked} onClick={toggleBookmarked} />
        <CardQuestion>{card.question}</CardQuestion>
        <p>{showCard ? card.answer : ''}</p>
        <Button onClick={() => setShowCard(!showCard)}>
          {showCard ? 'Hide answer' : 'Show answer'}
        </Button>
      </Card>
    </div>
  )
}

const CardQuestion = styled.p`
  font-size: 1.5em;
`
