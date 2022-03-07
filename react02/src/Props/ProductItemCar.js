import React, { Component } from 'react'

export default class ProductItemCar extends Component {
  render() {
    return (
        <div className="col-3" >
        <div   className="card text-left">
          <img  className="card-img-top" src={this.props.item.img} alt={this.props.item.img} />

          <div className="card-body">
            <h4 className="card-title">{this.props.item.name}</h4>
            <p className="card-text">{this.props.item.price}</p>
            <button onClick={()=>{this.props.XemChiTiet(this.props.item)}} data-toggle="modal" data-target="#exampleModal" className="btn btn-success">Xem chi tiết</button>
          </div>
        </div>
      </div>
    )
  }
}
