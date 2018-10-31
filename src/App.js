import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'
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
      //<AppLayout>
      //  <CardList cards={data} />
      // </AppLayout>
      <div>
        <Switch>
          <AppLayout>
            <Route
              exact
              path="/"
              render={props => <CardList {...props} cards={data} />}
            />
          </AppLayout>
        </Switch>
      </div>
    )
  }
}

export default App
