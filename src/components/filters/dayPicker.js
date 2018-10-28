import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DayPickerFilter extends Component {
  state = {
    from: undefined,
    to: undefined
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  render() {
    const { from, to } = this.state
    const selectedRange =
      from &&
      to &&
      `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`

    return (
      <div className="date-range">
        <DayPicker
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default DayPickerFilter
