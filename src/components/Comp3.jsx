import React, { useContext } from 'react'
import {NameTitle} from "../App"
export default function Comp3() {
   let resultTitle =useContext(NameTitle);
   console.log(resultTitle);
  return (
      <div >Comp3 : {resultTitle} </div>
  )
}
