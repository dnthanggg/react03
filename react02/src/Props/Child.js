import React from 'react'

export default function Child(props) {
  console.log(props, this);
  // let  renderNumber  = () =>{
  //   let {numbers} = props.PropsNature;
  //  return numbers.map((numbs,index)=>{
      // return <button key={index}>{numbs}</button>
  //   })
  // }

  let { src, desc, numbers} = props.PropsNature
  return (
    <div>
      <img style={{width:"200px"}} src={src} alt={desc} />
       
       {/* {renderNumber()} */}
     
       {props.PropsRenderNumber()}
    </div>
  )
}
