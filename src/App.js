import React from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import Button from './Button'
import cards from './cards.json'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <Grid>
      <GlobalStyle />
      {cards.map(card => (
        <Card card={card}></Card>
      ))}
    </Grid>
  )
}

export default App

const Grid = styled.div`
  display: grid;
  gap: 20px;
  margin: 20px 50px;
`
