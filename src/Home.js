import React, { useState } from 'react'
import Card from './Card'
import styled from 'styled-components/macro'
import Globalstyle from './GlobalStyle'
import ButtonFilter from './ButtonFilter'

export default function Home({ cards, toggleBookmarked }) {
  const [isOnlyBookmarkShown, setIsOnlyBookmarkShown] = useState(false)
  return (
    <Grid>
      <Globalstyle />
      <ButtonFilter
        onClick={() => setIsOnlyBookmarkShown(!isOnlyBookmarkShown)}
      >
        {isOnlyBookmarkShown === false ? 'Bookmarked cards' : 'All cards'}
      </ButtonFilter>
      {isOnlyBookmarkShown
        ? cards
            .filter(card => card.isBookmarked === true)
            .map((card, index) => (
              <Card
                toggleBookmarked={() => toggleBookmarked(index)}
                key={index}
                {...card}
              ></Card>
            ))
        : cards.map((card, index) => (
            <Card
              card={card}
              key={index}
              toggleBookmarked={() => toggleBookmarked(index)}
              {...card}
            ></Card>
          ))}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  gap: 20px;
  margin: 20px 50px;
`
