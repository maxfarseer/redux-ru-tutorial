import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  render() {
    const { name } = this.props
    return <div className='col-offset-1 col-md-3'>
      <p>Привет, {name}!</p>
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired
}
