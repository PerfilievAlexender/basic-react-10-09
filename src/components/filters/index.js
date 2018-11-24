import React, { Component } from 'react'
import SelectFilter from './select'
import DayPickerFilter from './dayPicker'

export class Filters extends Component {
  render() {
    return (
      <div>
        <SelectFilter />
        <DayPickerFilter />
      </div>
    )
  }
}

export default Filters
