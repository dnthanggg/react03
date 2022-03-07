import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  renderItem = () =>{
   return this.props.arrProduct.map((items,index)=>{
        return <div key={index} className="col-4 mt-3">
         <ProductItem itemShoe={items.image} />
        </div>
       

    })
  }

  render() {
    return (
      <div className='row'>{this.renderItem()}</div>
    )
  }
}
