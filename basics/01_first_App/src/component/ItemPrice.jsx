import "./ItemPrice.css"
import { useState } from "react";
 function ItemPrice(props){
  //  let name=props.name;
   const rate=props.rate;
   const year=props.year;

   const [title,setTitle]=useState(props.name)
   function changeName(){
    console.log("clicked");
  //  setTitle("sjh")
  setTitle("pinkPop")
    
   }
  return(
    <div>
      <div className="powder">
      <p >{title}</p>
      <p>{rate}</p>
      <p>{year}</p>
      <button onClick={changeName}>click here</button>
      </div>
    </div>
  )
 }
 export default ItemPrice;