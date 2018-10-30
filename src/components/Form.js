import React, { Component } from 'react'

class Form extends Component {
  state = {}
  render() {
    return (
      <form>
        <input type="text" placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default Form
