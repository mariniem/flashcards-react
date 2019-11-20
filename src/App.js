import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import CardsData from './cards.json'
import GlobalStyle from './GlobalStyle'
import ButtonFilter from './ButtonFilter'

function App() {
  const [cards, setCards] = useState(CardsData)
  const [isOnlyBookmarksShown, setIsOnlyBookmarkShown] = useState(false)
  return (
    <Grid>
      <GlobalStyle />
      <ButtonFilter
        onClick={() => setIsOnlyBookmarkShown(!isOnlyBookmarksShown)}
      >
        {isOnlyBookmarksShown === false ? 'Bookmarked cards' : 'All cards'}
      </ButtonFilter>
      {isOnlyBookmarksShown
        ? cards
            .filter(card => card.isBookmarked === true)
            .map((card, index) => (
              <Card
                card={card}
                key={index}
                toggleBookmarked={() => toggleBookmarked(index)}
              ></Card>
            ))
        : cards.map((card, index) => (
            <Card
              card={card}
              key={index}
              toggleBookmarked={() => toggleBookmarked(index)}
            ></Card>
          ))}
    </Grid>
  )

  function toggleBookmarked(index) {
    const card = cards[index]
    setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1),
    ])
  }
}

export default App

const Grid = styled.div`
  display: grid;
  gap: 20px;
  margin: 20px 50px;
`
