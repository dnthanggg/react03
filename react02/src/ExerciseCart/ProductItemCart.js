import React, { Component } from "react";

export default class ProductItemCart extends Component {
  render() {
    let { hinhAnh, tenSP } = this.props.propsItems;
    return (
      <div className="col-4">
        <div className="card text-left">
          <img width={{width:'100%'}} className="card-img-top" src={hinhAnh} alt={hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <button onClick={()=>{this.props.themGioHang(this.props.propsItems)}} className="btn btn-success">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
