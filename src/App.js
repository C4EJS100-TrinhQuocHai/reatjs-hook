import React, { createContext, useState } from 'react'
import UseEffect from './components/UseEffect';
import UseContext from './components/UseContext';
export const NameTitle=createContext();
export default function App() {
  const [count,setCount] =useState(0);
  const [title,setTitle] =useState("hello RA HCM!");
  const changeCount =()=>{
    setCount(pre => pre+1) //setCount(0+1)
    setCount(pre => pre + 1) //setCount(0+1)
    setCount(pre => pre + 1) //setCount(0+1)
  }
  const handleChange=()=>{
    setTitle("Áo")
  }
  return (
    <>
     {/* 
     **** Các hook cần học
     1.UseState
    trả về cho mọi người 1 cái mảng có 2 tham số  
      */}
      <h2> biến muốn  mua : {title} </h2>
      <button onClick={changeCount}> tăng count </button>
      <button onClick={handleChange} > Áo </button>
      <button onClick={()=>{setTitle("Quần")}}> Quần  </button>
      <button onClick={()=>{setTitle("Giày")}}> Giày </button>
      <UseEffect></UseEffect>
      <NameTitle.Provider value={title} >
        <UseContext></UseContext>
      </NameTitle.Provider>
    </>
  )
}
