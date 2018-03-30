import React from 'react';
import ProductItem from './ProductItem';
import ProductTitle from './ProductTitle';

export default class ProductList extends React.Component {


  render() {
    const productItemsMap = new Map();
    this.props.products.forEach((e, i) => {
      if (!productItemsMap.has(e.category)) {
        const tempArray = [];
        tempArray.push((<ProductTitle key={e.category} productTitle={e.category} />))
        productItemsMap.set(e.category,tempArray)
      }
      const productsArray = productItemsMap.get(e.category);
      productsArray.push((<ProductItem onlyShowInStock={this.props.onlyShowInStock} key={e.name} stocked={e.stocked} name={e.name} price={e.price} />))
    })
    const elements = [...productItemsMap.values()]
    
    return (
      <div>
        <h1>Name Price</h1>
        {elements}
      </div>
    )
  }
}