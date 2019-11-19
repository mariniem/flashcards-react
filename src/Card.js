import React from 'react'
import cards from './cards.json'
import styled from 'styled-components/macro'

export default function Card({ title, question, answer, tags, isBookmarked }) {
  return (
    <div>
      {cards.map((card, index) => (
        <CardStyled>
          <h2>{card.title}</h2>
          <p>{card.question}</p>
          <p>{card.answer}</p>
          <button>Show answer</button>
        </CardStyled>
      ))}
    </div>
  )
}

const CardStyled = styled.section`
  padding: 20px;
  margin: 20px;
  background: lightgrey;
  color: white;
  border-radius: 6px;
  box-shadow: 0 10px 10px #0002;
  position: relative;
`
