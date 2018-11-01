import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { selectDateRange } from '../../ac'
import { connect } from 'react-redux'
import { dateSelector } from '../../selectors'

class DayPickerFilter extends Component {
  handleDayClick = (day) => {
    const { range, selectDateRange } = this.props
    selectDateRange(DateUtils.addDayToRange(day, range))
  }

  render() {
    const { from, to } = this.props.range
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

export default connect(
  (store) => ({
    range: dateSelector(store)
  }),
  { selectDateRange }
)(DayPickerFilter)
