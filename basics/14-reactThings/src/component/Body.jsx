import React from "react";
import RestoCard from "./RestoCard";
// import swiggyAIP from "../utils/mockData";
import TopRatedResto from "./TopRatedResto";
import { useState,useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
const Body = () => {

const [listOfResto, setListOfResto]=useState([])
// console.log(listOfResto);

//COPY for filteredUi
const [cListOfRest,cSetListOfResto]=useState([])

const [searchText,setSearchText]=useState("")

useEffect(
   ()=>{
          fetchData()  
      },[])

const fetchData= async()=>{
 let data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   let jsondata=await data.json();
console.log("data", jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

const restaurants =jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
setListOfResto(restaurants)
cSetListOfResto(restaurants)

}


  return listOfResto.length===0? (
    <ShimmerUi/>
  ):(
    <div>
      <div className="filter">

      <div className="search">
             <input type="text"
              value={searchText} 
              onChange={(e)=>{
               setSearchText(e.target.value)
             }}/>

             <button onClick={()=>{
                let filteredRestoBySearch=listOfResto.filter((data)=>data.info.name.toLowerCase().includes(searchText.toLowerCase())) 
                cSetListOfResto(filteredRestoBySearch)
             }}>
              search-btn</button>
      </div>

        <button className="filter-btn" 
           onClick={()=>{
          let filteredResto= listOfResto.filter((val)=>val.info.avgRating>4)
           setListOfResto(filteredResto) 
          }}>
          Top Rated Restarunt
        </button>
      </div>
      <div className="body-container">
        {cListOfRest.map((value) => (
          <RestoCard key={value.info.id} listOfResto={value} />
        ))}
        
      </div>
    </div>
  );





  
};

export default Body;
