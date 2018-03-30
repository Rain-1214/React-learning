import React from 'react'

export default class SearchInput extends React.Component {

  handleChange(propertyName, event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.props.stateChange({[propertyName]: value})
  }

  render () {

    return (
      <div>
        <input type="text" value={this.props.searchInputVal} onChange={this.handleChange.bind(this, 'searchInputVal')} placeholder="search" />
        <br/>
        <label htmlFor="checkBoxId">
          <input id="checkBoxId" type="checkbox" onChange={this.handleChange.bind(this, 'onlyShowInStock')} />
          Only Show Products In Stock
        </label>
      </div>
    )
  }

}

