import React from 'react'
import {useEffect} from "react"
import {useState} from "react"
import { useParams } from 'react-router-dom';
import ShimmerUi from './ShimmerUi';
import useRestoMenu from '../utils/useRestoMenu'; 
import RestaurantCategory from './RestaurantCategory';
const RestoMenu = () => {
  const {resId}=useParams();
  const resInfo=useRestoMenu(resId)
  const [showIndex,setShowIndex]=useState(null)

    if(resInfo===null) return <ShimmerUi/>

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
     const categories=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   
    return (
    <div className="w-6/12  m-auto p-4 mt-6">
        <div >
           <div className="text-center">
                <h1 className=" font-bold text-2xl">{name}</h1>
                <p className="font-bold text-xl border-b-[0.1px]">{cuisines.join(", ")} - {costForTwoMessage}</p>
                <h2 className="mt-6 font-bold text-xl">Menu</h2> 
                   
            </div>   
                {
                  categories.map((category,index)=><RestaurantCategory 
                  key={category.card.card.title}
                   data={category.card.card} 
                     showItems={index===showIndex?true:false}
                     setShowIndex={()=>setShowIndex(index)}
                     />              
                  )
                }
         </div>
    </div>
  )
}

export default RestoMenu
