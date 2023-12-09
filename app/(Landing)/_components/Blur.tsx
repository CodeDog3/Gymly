import React from 'react'

type variant = ("type1" | "type2");

interface props {
width:number,
height:number,
type: variant
}


const Blur = ({width,height,type}:props) => {

  return (
    <div className={`${type === "type1" ? "bg-blur" : "bg-blur2"}`} style={{height:`${height}px`, width:`${width}px`}}>

    </div>
  )
}

export default Blur