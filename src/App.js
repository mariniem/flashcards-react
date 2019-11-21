import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Nav from './Nav.js'
import { getCards, patchCard } from './services'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  function toggleBookmarked(id) {
    const index = cards.findIndex(card => card._id === id)
    const card = cards[index]
    patchCard({ isBookmarked: !card.isBookmarked, _id: card._id }).then(
      changedCard => {
        setCards([
          ...cards.slice(0, index),
          changedCard,
          ...cards.slice(index + 1),
        ])
      }
    )
  }

  return (
    <Router>
      <Nav
        items={[
          { path: '/', text: 'Hello' },
          { path: '/create', text: 'Create' },
        ]}
      />
      <Switch>
        <Route exact path="/">
          <Home cards={cards} toggleBookmarked={toggleBookmarked} />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
