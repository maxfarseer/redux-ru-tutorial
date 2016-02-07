import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { name, surname, age } = this.props.user
    return <div>
      <p>Привет из App, {name} {surname}!</p>
      <p>Тебе уже {age} ?</p>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(App)
