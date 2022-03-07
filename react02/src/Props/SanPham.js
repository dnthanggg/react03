import React, { Component } from 'react'

export default class SanPham extends Component {
   
  render() {
    let PropsSp = this.props.PropsSanPham
    return (
        <div className="card text-left">
        <img className="card-img-top" src={PropsSp.hinhAnh} alt="{items.hinhAnh}" />
        <div className="card-body">
          <h4 className="card-title">{PropsSp.tenSP}</h4>
          <p className="card-text">{PropsSp.giaBan}</p>
          <button onClick={()=>{this.props.xemChitiet(PropsSp)}} className="btn btn-success">Chi tiết</button>
        </div>
      </div>
    )
  }
}
