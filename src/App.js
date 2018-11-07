import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import CardList from './components/CardList'
import Form from './components/Form'

class App extends Component {
  state = {
    data: [
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
  }

  addNewCard = cardInfo => {
    this.setState(prevState => ({ data: prevState.data.concat(cardInfo) }))
  }

  render() {
    return (
      <div>
        <Switch>
          <AppLayout>
            <Route
              exact
              path="/"
              render={props => <CardList {...props} cards={this.state.data} />}
            />
            <Route
              path="/cards/new"
              render={props => <Form {...props} onSubmit={this.addNewCard} />}
            />
          </AppLayout>
        </Switch>
      </div>
    )
  }
}

export default App
