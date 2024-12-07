import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {

  const apiData= props.apiData
  const category=props.category;
  const setcategory=props.setcategory;

   const [liked,setLiked]=useState([])

     function getCourseData(){
      if(category=="All"){
         const allData=[]
         Object.values(apiData).forEach((course)=>{  
            course.forEach((course)=>{
                allData.push(course)
            })
           })
           return allData
      }
      
      else{
         return(category)
      }
     
    
     }

  return (
    <div>

       {
          getCourseData().map((course)=>{
         
         return(
          <Card key={course.id}  course={course}  setLiked={setLiked} liked={liked} />
         )
      })

       } 
    </div>
  )
}

export default Cards