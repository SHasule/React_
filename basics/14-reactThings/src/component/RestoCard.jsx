 import React from "react";
 import "./Card.css";
 import { RESTO_IMG } from "../utils/constant";

const RestoCard = ({ listOfResto }) => {
  const { name, cuisines, avgRating, locality,cloudinaryImageId } = listOfResto?.info;


  return (
    <div className=" flex flex-col gap-2 m-4 p-4 rounded bg-gray-200 hover:bg-gray-300 shadow-lg">
      <img
        className="res-img"
        src={RESTO_IMG+cloudinaryImageId}
   />
      <p className="font-bold text-center">{name}</p>
      <p>cuisines: {cuisines.join(", ")}</p>
      <p>avg Rating: {avgRating}</p>
      <p>location: {locality}</p>

     
    </div>
  );
};


export default RestoCard
