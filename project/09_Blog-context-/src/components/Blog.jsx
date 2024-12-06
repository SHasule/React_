import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/Appcontext'
import Loader from './Loder'
// import Card from './Card'

const Blog = () => {

  const {posts,loading}=useContext(AppContext)
  
  

  return (
    <div className='w-11/12 mb-[60px] flex flex-col gap-7 py-2 max-w-[550px] h-screen justify-center items-center  mt-[60px]'>
       
       {
        loading ? (<Loader/>):
        
        (posts===0?(
          <div className='mt-3'> 
            <p>Page not Found</p>
            </div>
        ):

        (
          posts.map((post)=>(
            <div key={post.id}>
              <p className='font-bold text-xl  '>{post.title}</p>
             
             <p className='text-[15px] mt-2' >
              By <span className='italic font-md mt-3'>{post.author}</span> on <span className='font-bold'>{post.category}</span>
             </p>
             <p className='text-[18px] mt-2'> Posted on {post.date}</p>
             <p className='text-sm mt-2'>{post.content}</p>

             <div>

             </div>
              {
                post.tags.map((tag,index)=>{
                  return <span key={index} className='text-blue-600 mt-2 mr-2 underline text-sm font-medium'> {`#${tag}`} </span>
                })
              }

            </div>
          ))
        )


      )
       }



    </div>
  )
}

export default Blog