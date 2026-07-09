import React from "react";
import RestoCard from "./RestoCard";
// import swiggyAIP from "../utils/mockData";
import TopRatedResto from "./TopRatedResto";
import { useState,useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
const Body = () => {

const [listOfResto, setListOfResto]=useState([])
// console.log(listOfResto);

useEffect(
   ()=>{
          fetchData()  
      },[])

const fetchData= async()=>{
 let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
   let jsondata=await data.json();
console.log("data", jsondata.data);

const restaurants = jsondata.data.cards
    .filter((card) => card?.card?.card?.info)
    .map((card) => ({
      info: card.card.card.info,
    }));
setListOfResto(restaurants)

}

if(listOfResto.length===0){
  return <ShimmerUi/>
}

  return (
    <div>
      <div className="filter">
        <button className="filter-btn" 
           onClick={()=>{
          let filteredResto= listOfResto.filter((val)=>val.info.avgRating>4)
           setListOfResto(filteredResto) 
          }}>
          Top Rated Restarunt
        </button>
      </div>
      <div className="body-container">
        {listOfResto.map((value) => (
          <RestoCard key={value.info.id} listOfResto={value} />
        ))}
        
      </div>
    </div>
  );





  
};

export default Body;
