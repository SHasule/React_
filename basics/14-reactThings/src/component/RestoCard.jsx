 import React from "react";
 import "./Card.css";
 import { RESTO_IMG } from "../utils/constant";
// const RestoCard = ({ listOfResto }) => {
//   const { name, cuisines, avgRating, locality,cloudinaryImageId } = listOfResto.info;


//   return (
//     <div className="card-container">
//       <img
//         className="res-img"
//         src={`RESTO_IMG+${cloudinaryImageId}`}
//    />
//       <p>{name}</p>
//       <p>cuisines: {cuisines.join(", ")}</p>
//       <p>avg Rating: {avgRating}</p>
//       <p>location: {locality}</p>

     
//     </div>
//   );
// };

// export default RestoCard;

const RestoCard = ({ listOfResto }) => {
  const { name, cuisines, avgRating, locality,cloudinaryImageId } = listOfResto?.info;


  return (
    <div className="card-container">
      <img
        className="res-img"
        src={RESTO_IMG+cloudinaryImageId}
   />
      <p>{name}</p>
      <p>cuisines: {cuisines.join(", ")}</p>
      <p>avg Rating: {avgRating}</p>
      <p>location: {locality}</p>

     
    </div>
  );
};


export default RestoCard
