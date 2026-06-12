import React from "react";
import RestoCard from "./RestoCard";
import swiggyAIP from "../utils/mockData";
import TopRatedResto from "./TopRatedResto";
import { useState } from "react";

const Body = () => {

const [listOfResto, setListOfResto]=useState(swiggyAIP)

  
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
