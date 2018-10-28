import React, { Component } from 'react'
import Select from 'react-select'
import articles from '../../fixtures'

class SelectFilter extends Component {
  state = {
    selectedOption: null
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
  }

  render() {
    const options = articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
    return (
      <div>
        <Select
          options={options}
          value={this.state.selectedOption}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default SelectFilter
