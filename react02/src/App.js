import React, { Component } from "react";
import ProductList from "./Props/ProductList";
import dataJson from "./Data/data.json";
import DanhSachSanPham from "./Props/DanhSachSanPham";
import ExerciseCar from "./Props/ExerciseCar";
import ExerciseCart from "./ExerciseCart/ExerciseCart";

export default class App extends Component {
  render() {
    return (

          <div>
            {/* <DanhSachSanPham/> */}
            <ExerciseCart/>
            {/* <ExerciseCar/> */}
          </div>
      // <div className="container-fluid">
      //   <div className="row">
      //     <div className="col-4">
      //       <div class="nav flex-column nav-pills justify-content-center" style={{ minHeight: "800px" }} id="v-pills-tab" role="tablist" aria-orientation="vertical">
      //         <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
      //           Home
      //         </a>
      //         <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
      //           Profile
      //         </a>
      //       </div>
      //     </div>
      //     <div className="col-8">
      //       <div class="tab-content" id="v-pills-tabContent">
      //         <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      //         <ProductList arrProduct={dataJson} />
      //         </div>
      //         <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      //           Shop
      //         </div>
      //       </div>
           
      //     </div>
      //   </div>
      // </div>
    );
  }
}
