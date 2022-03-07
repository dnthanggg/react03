import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    Nature = {
      id:1,
      src : "https://images.pexels.com/photos/6070408/pexels-photo-6070408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      desc : "Choose original choose natural",
      numbers :[1,2,3,4,5]
    }
    constructor() {
      super()
      this.renderNumber =this.renderNumber.bind(this)
    }

    renderNumber() {
      return this.Nature.numbers.map((numbs,index)=>{
        return <button key={index}>{numbs}</button>
      })
    }

    // renderNumber(numbs) {
    //   return numbs.map((e,index)=>{
    //     return <button key={index}>{e}</button>
    //   })
    // }



    
  render() {
      
    return (
      <div>
       
        {/* <Child PropsNature ={this.Nature}/> */}
        <Child PropsRenderNumber ={this.renderNumber} PropsNature ={this.Nature}/>
        

      
      </div>

    )}
}

