import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class MenuItem extends Component {
  render() {
    return (
      <div>
        <NavLink to={this.props.path}>{this.props.children}</NavLink>
      </div>
    )
  }
}

export default MenuItem
