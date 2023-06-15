import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount] =useState(0);
    const [data,setData] =useState();
    const [variable, setVariable] = useState("");
    useEffect(()=>{
      /// đoạn call API lấy dữ liệu
        fetch(`https://jsonplaceholder.typicode.com/${variable}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(""))
    },[variable])
  
  return (
   <>
    {/* dùng để thực hiện các side Effect 
     1. nhận về 2 tham số tham  số thứ nhất là 1 callback : tham số bắt buộc
      tham số thứ 2 là 1 cái []
      ==>Nơi làm việc với API để lấy dữ liệu 
      -chạy sau khi component được mount
      3 kiểu hay dùng:
      1. useEffect(()=>{})
      2. useEffect(()=>{},[])
      3. useEffect(()=>{},[deps])
    */}
        <p> giá trị của count : {count}</p>
             <h1> Useffect</h1>
             <button onClick={()=>{
                setCount(count+1)
             }}> tăng count </button>
             <button onClick={()=>{
                setVariable("users")
             }}> getdata user </button>
             <button onClick={()=>{
                setVariable("todos")
             }}
              > getdata todos </button>

   </>
  )
}
