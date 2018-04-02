import React from 'react';

export default class ProductItem extends React.Component {

  render () {

    console.log(this.props.searchInputVal)

    if (this.props.onlyShowInStock && !this.props.stocked) {
      return null
    }

    if (this.props.searchInputVal !== '' && !this.props.name.toUpperCase().includes(this.props.searchInputVal.toUpperCase())) {
      return null
    }

    return (
      <div>
        <span className={this.props.stocked ? '' : 'text-red'}>{this.props.name}</span>
        <span>{this.props.price}</span>
      </div>
    )
  }

}