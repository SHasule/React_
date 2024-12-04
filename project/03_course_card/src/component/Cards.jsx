import React from 'react'
import Card from './Card'

function Cards({courses}) {

  const allcourse=[];

 const getCourse=()=>{
  console.log("all courses");
console.log(courses);
  
   Object.values(courses).forEach((courseCategory)=>{
    courseCategory.forEach((course)=>{
      allcourse.push(course)
    })
   })
   return allcourse
 }
 
  return (
    <div>

  {!courses?(
    <div>
      <p>No data found</p>
      </div>
  ):( getCourse().map((courses)=>{
    return<Card key={courses.id} course={courses} />
   }))}


    </div>
  )
}

export default Cards