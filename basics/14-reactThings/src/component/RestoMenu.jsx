import React from 'react'
import {useEffect} from "react"
import {useState} from "react"
import { useParams } from 'react-router-dom';
import ShimmerUi from './ShimmerUi';
import { RESTO_API } from '../utils/constant';

const RestoMenu = () => {
  const {resId}=useParams();
  console.log(resId);
  
    
const[resInfo,setResInfo]=useState(null)

    const fetchData = async () => {
 
    const response = await fetch(
      RESTO_API+resId
    );
    const apiData= await response.json();
    console.log(apiData.data);   
  setResInfo(apiData.data)
};

    useEffect(() => {
        fetchData()
    }, [])

    if(resInfo===null) return <ShimmerUi/>

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const { categories = [] } =
  resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || {};

    
  
    return (
    <div>
    <h1>{name}</h1>
    <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
 <h2>Menu</h2>
     
      <ul>
  {categories.map((category) => (
    <li key={category.categoryId}>
      {category.title}
    </li>
  ))}
</ul>

    </div>
  )
}

export default RestoMenu
