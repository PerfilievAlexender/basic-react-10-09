import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from '../ac'
import PropTypes from 'prop-types'

class Counter extends Component {
  render() {
    console.log('--- counter')
    const { number, handleIncrement } = this.props
    return (
      <div>
        <h3>{number}</h3>
        <button onClick={handleIncrement}>increment</button>
      </div>
    )
  }
}

Counter.propTypes = {
  number: PropTypes.number,
  handleIncrement: PropTypes.func
}

const mapStateToProps = (storeState) => ({
  number: storeState.counter
})

const mapDispatchToProps = {
  handleIncrement: increment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
