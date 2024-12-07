import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {
  const course=props.course
  const setLiked=props.setLiked;
  const liked=props.liked;

   function clickHandler(){

        if(liked.includes(course.id)){
             setLiked((prev)=>prev.filter((cid)=>cid!==course.id))
             toast.warning("like removed")
        }

        else{
               if(liked.length===0){
                 setLiked([course.id])
               }

               else{
                setLiked((prev)=>[...prev,course.id])
               }
               toast.success("Liked Successfully")
        }
   }

  return (
    <div>

        <div>
          <img src={course.image.url} alt="" />
        </div>
  
       <div>

        <button onClick={clickHandler}>
          {
            liked.includes(course.id)?( <FcLike />):(    <FcLikePlaceholder />)
          }
        
        </button>

       </div>

        <div>
            <p>{course.title}</p>

            <p>
              {
                 course.description.length>100?
                 (course.description.substr(0,100)) +"..."
                 :(course.description)
              }
              </p>
        </div>


    </div>
  )
}

export default Card