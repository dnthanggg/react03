import React, { Component } from "react";

export default class Cart extends Component {
  redergioHang = () => {
    let { propsSanPham } = this.props;
    return propsSanPham.map((sanpham, index) => {
      return (
        <tr key={index}>
          <td>{sanpham.maSP}</td>

          <td>
            <img style={{ width: 100 }} src={sanpham.hinhAnh} alt={sanpham.hinhAnh} />
          </td>
          <td>{sanpham.tenSP}</td>
          <td> <button onClick={()=>{this.props.tangGiamSanPham(sanpham.maSP,-1)}}>-</button> {sanpham.soLuong} <button onClick={()=>{this.props.tangGiamSanPham(sanpham.maSP,1)}}>+</button> </td>
          <td>{sanpham.giaBan}</td>
          <td>
            {sanpham.soLuong*sanpham.giaBan}
          </td>
          <button onClick={()=>{this.props.xoaSanPham(sanpham.maSP)}} className="btn btn-danger">Xóa</button>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div style={{ minWidth: "1000px" }} className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng </th>
                    <th>Đơn giá </th>
                    <th>Thành tiền </th>
                  </tr>
                </thead>
                {this.redergioHang()}
              </table>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
