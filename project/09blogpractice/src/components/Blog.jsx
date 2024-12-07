import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/Appcontext'
import Loading from './Loading'

const Blog = () => {
    
const {loading,posts,page}=useContext(AppContext)
  return (

    <div>

      {
        loading ? 
        (<Loading/>):
          
        (page===0?

          (
            <div>
              <p>Page not found</p>
            </div>
          ):

          (posts.map((post)=>{
              
           return(
            <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.author}</p>
            <p>{post.date}</p>


            {
              post.tags.map((tag,index)=>(
                 <p key={index}>{`#${tag}`}</p>
              ))
            }
            </div>
           )
          }))
        )
        
      }

    </div>
  )
}

export default Blog