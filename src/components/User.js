import React, { PropTypes, Component } from 'react'

export default class User extends Component {

  render() {
    const { name } = this.props
    let template

    if (name) {
      template = <p>Привет, {name}!</p>
    } else {
      template = <button className='btn' onClick={this.props.handleLogin}>Войти</button>
    }

    return <div className='ib user'>
      {template}
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired
}
