import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItem: false
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          handleClick={this.handleClick}
        />
      )
    }

    handleClick = () => {
      this.setState({
        openItem: !this.state.openItem
      })
    }
  }
