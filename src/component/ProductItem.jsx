import React from 'react';

export default class ProductItem extends React.Component {

  render () {

    if (this.props.onlyShowInStock && !this.props.stocked) {
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