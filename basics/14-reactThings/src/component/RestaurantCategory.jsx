import React,{useState} from 'react'
import MenuItemList from './MenuItemList';

const RestaurantCategory = ({data,showItems,setShowIndex}) => {

    function handleClick(){
       setShowIndex()
    }
    
  return (
    <div className="flex flex-col gap-3 cursor-pointer" onClick={handleClick} >
       <div className="border-b-2 mt-2.5  border-b-taupe-400 bg-indigo-50 p-2 ">
        <div className="flex justify-between gap-2 items-center">
          <span className="font-bold p-2">{data.title} ({data.itemCards.length}) </span>
         <span className="cursor-pointer">⬇️</span>
        </div>

         {   showItems &&
              data.itemCards.map((item)=>
              <MenuItemList key={item.card.info.id} 
               item={item.card.info}/>)
         }
       
       </div>
    
      
    </div>
  )
}

export default RestaurantCategory
