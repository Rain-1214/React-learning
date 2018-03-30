import React from 'react';
import SearchInput from './SearchInput';
import ProductList from './ProductsList';

export default class Product extends React.Component {

  data = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
  ]

  constructor () {
    super();
    this.state = {
      products: [],
      searchInputVal: '',
      onlyShowInStock: false,
    }
  }

  componentDidMount () {
    this.setState({products: this.data})
  }

  changeState(val) {
    this.setState({...val}, () => {
      console.log(this.state)
    })
  }

  render () {
    
    return (
      <div>
        <SearchInput searchInputVal={this.state.searchInputVal} stateChange={this.changeState.bind(this)} />
        <ProductList searchInputVal={this.state.searchInputVal} products={this.state.products} onlyShowInStock={this.state.onlyShowInStock} />
      </div>
    )
  }

}
