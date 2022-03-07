import React, { Component } from "react";
import Modal from "./Modal";

import ProductListCar from "./ProductListCar";

export default class ExerciseCar extends Component {
  state = {
    productDetail: { id: 1, name: "black car", img: "./img/products/black-car.jpg", price: 1000 },
  };

  xemChiTiet = (newProduct) =>{
    this.setState({
        productDetail:newProduct
    })
  }

  products = [
    { id: 1, name: "black car", img: "./img/products/black-car.jpg", price: 1000 },
    { id: 2, name: "red car", img: "./img/products/red-car.jpg", price: 2000 },
    { id: 3, name: "silver car", img: "./img/products/silver-car.jpg", price: 3000 },
    { id: 3, name: "Steel car", img: "./img/products/steel-car.jpg", price: 4000 },
  ];
  render() {
    return (
      <>
        <Modal productDetail={this.state.productDetail} />
        <ProductListCar XemChiTiet={this.xemChiTiet} propsProduct={this.products} />
      </>
    );
  }
}
