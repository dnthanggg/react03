import React, { Component } from "react";
import ProductItemCar from "./ProductItemCar";

export default class ProductListCar extends Component {
  productData = this.props.propsProduct
  renderCar = () => {
    return this.productData.map((cars, index) => {
      return (
        <ProductItemCar XemChiTiet={this.props.XemChiTiet} item={cars}/>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.renderCar()}</div>
      </div>
    );
  }
}
