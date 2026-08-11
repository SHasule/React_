import React from "react";
import RestoCard from "./RestoCard";
// import swiggyAIP from "../utils/mockData";
import TopRatedResto from "./TopRatedResto";
import { useState,useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

const [listOfResto, setListOfResto]=useState([])
console.log("rendered ", listOfResto);

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
// console.log("data", jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

const restaurants =jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
setListOfResto(restaurants)
cSetListOfResto(restaurants)
}



const onlineStatus=useOnlineStatus();

  return listOfResto.length===0? (
    <ShimmerUi/>
  ):(
    <div>
      <div className="flex gap-3">

      <div >
             <input type="text" className="border-[0.2px] border-black px-2 py-1 m-2 rounded-[10px]" 
              value={searchText} 
              onChange={(e)=>{
               setSearchText(e.target.value)
             }}/>

             <button className="bg-green-300 hover:bg-green-400 text-black font-normal px-2 py-1 rounded" onClick={()=>{
                let filteredRestoBySearch=listOfResto.filter((data)=>data.info.name.toLowerCase().includes(searchText.toLowerCase())) 
                cSetListOfResto(filteredRestoBySearch)
             }}>
              search-btn</button>
      </div>

        <button className="bg-green-300 hover:bg-green-400 text-black font-normal px-2 py-1 m-2 rounded" 
           onClick={()=>{
          let filteredResto= listOfResto.filter((val)=>val.info.avgRating>4)
           setListOfResto(filteredResto) 
          }}>
          Top Rated Restarunt
        </button>
      </div>
    
    
    
      <div className="flex flex-wrap gap-2 my-2 mx-2 rounded justify-evenly">
        {cListOfRest.map((value) => (

        <Link className=" w-56 rounded-lg" to={"/restaurant/"+value.info.id} key={value.info.id}>
          <RestoCard key={value.info.id} listOfResto={value} />
          </Link>
        ))}
        
      </div>
    </div>
  );





  
};

export default Body;
