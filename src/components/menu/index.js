import React, { Component } from 'react'

export class Menu extends Component {
  render() {
    return (
      <div>
        <h3>Main menu</h3>
        {this.props.children}
      </div>
    )
  }
}

export default Menu
