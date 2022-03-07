import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  data = [
    { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg" },

    { maSP: 2, tenSP: "Meizu 16Xs", manHinh: "AMOLED, FHD+ 2232 x 1080 pixels", heDieuHanh: "Android 9.0 (Pie); Flyme", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 7600000, hinhAnh: "./img/meizuphone.jpg" },

    { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraSau: "Chính 12 MP & Phụ 12 MP", cameraTruoc: "7 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "./img/applephone.jpg" },
  ];

  state = {
    SanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  renderSanPham = () => {
    return this.data.map((items, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham xemChitiet={this.xemChitet} PropsSanPham={items}/>
        </div>
      );
    });
  };

  xemChitet = (sanPhamChon) =>{
      this.setState({
          SanPhamChiTiet:sanPhamChon
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
        <div className="row">
          <div className="col-4">
            <img style={{width:'100%'}} src={this.state.SanPhamChiTiet.hinhAnh} alt={this.state.SanPhamChiTiet.hinhAnh} />
          </div>
          <div className="col-8">
            <table className="table">
              <tr>
                <th>Màn hình</th>
                <th>{this.state.SanPhamChiTiet.manHinh}</th>
                
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <th>{this.state.SanPhamChiTiet.heDieuHanh}</th>
                
              </tr>
              <tr>
                <td>Camera Trước</td>
                <th>{this.state.SanPhamChiTiet.cameraTruoc}</th>
             
              </tr>
              <tr>
                <td>Camera Sau</td>
                <th>{this.state.SanPhamChiTiet.cameraSau}</th>
             
              </tr>
              <tr>
                <td>RAM</td>
                <th>{this.state.SanPhamChiTiet.ram}</th>
             
              </tr>
              <tr>
                <td>Rom</td>
                <th>{this.state.SanPhamChiTiet.rom}</th>
             
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
