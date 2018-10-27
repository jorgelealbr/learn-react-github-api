import React, { Component } from 'react'
import CardList from './components/CardList'

class App extends Component {
  render() {
    let data = [
      {
        name: 'Jorge Leal',
        company: 'Thoughtworks BR',
        avatar_url: 'https://avatars3.githubusercontent.com/u/15630421?v=4'
      },
      {
        name: 'Aldenio',
        company: 'BC',
        avatar_url: 'https://avatars1.githubusercontent.com/u/7149450?v=4'
      }
    ]

    return (
      <div>
        <CardList cards={data} />
      </div>
    )
  }
}

export default App
