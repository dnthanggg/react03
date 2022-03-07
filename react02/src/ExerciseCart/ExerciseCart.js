import React, { Component } from "react";
import Cart from "./Cart";
import ProductListCart from "./ProductListCart";

export default class ExerciseCart extends Component {
  state = {
    gioHang: [],
  };

  xoaSanPham = (maSP) => {
    // let index = this.state.gioHang.findIndex()
    console.log(maSP);
    let index = this.state.gioHang.findIndex((spGioHang) => spGioHang.maSP === maSP);
    if (index !== -1) {
      this.state.gioHang.splice(index, 1);
    }
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  themGioHang = (sanpham) => {
    console.log(sanpham);
    let gioHangMoi = {
      maSP: sanpham.maSP,
      tenSP: sanpham.tenSP,
      giaBan: sanpham.giaBan,
      hinhAnh: sanpham.hinhAnh,
      soLuong: 1,
    };

    let index = this.state.gioHang.findIndex((spGH) => spGH.maSP === gioHangMoi.maSP);
    if (index !== -1) {
      this.state.gioHang[index].soLuong += 1;
    } else {
      this.state.gioHang.push(gioHangMoi);
    }

    let capNhatGioHang = this.state.gioHang;
    this.setState({
      gioHang: capNhatGioHang,
    });
  };

  tongSoLuong = () => {
    return this.state.gioHang.reduce((tongSanPham, soLuongSanPham, index) => {
      return (tongSanPham += soLuongSanPham.soLuong);
    }, 0);
  };

  tangGiamSanPham = (maSP, number) => {
    let gioHang = [...this.state.gioHang];
    let index = gioHang.findIndex((sp) => sp.maSP === maSP);
    if(index!==-1){
      gioHang[index].soLuong += number;
    }
    this.setState({
      gioHang: gioHang,
    });
  };

  render() {
    return (
      <div>
        <div className="p-5 text-right" >
          <i data-toggle="modal" data-target="#modelId" style={{ fontSize: "32px" }} class=" fa-solid fa-cart-shopping"></i>({this.tongSoLuong()})Giỏ hàng
        </div>

        <Cart tangGiamSanPham={this.tangGiamSanPham} xoaSanPham={this.xoaSanPham} propsSanPham={this.state.gioHang} />
        <ProductListCart themGioHang={this.themGioHang} />
      </div>
    );
  }
}
