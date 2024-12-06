import { useState } from "react";
import { createContext } from "react";
import { baseUrl } from "../BaseUrl";
import { children } from "react";



 export  const AppContext=createContext();

 export default function AppContextProvider({children}){

  const [loading,setloading]=useState(false);
  const[posts,setPost]=useState([]);
  const [page,setPage]=useState(1);
  const [totalPages,setTotalPages]=useState(null);
 
    

       async function fetchBlogPost(page=1){
          setloading(true);
          let url=`${baseUrl}?page=${page}`
          
          
           try{
               const result=await fetch(url);
               const data= await result.json()  
               console.log(data);
                setPage(data.page)
                setPost(data.posts)
                setTotalPages(data.totalPosts)
              
            }  
            catch (error) {
               console.log("ERROR: on fething data");
               setPage(1);
               setPost([])
               setTotalPages(null)
               
            }
            setloading(false)      
      
          }
   
          function HandlePageChange(page){
                setPage(page)
                fetchBlogPost(page)
          }
         

  const value={
    loading,
    setloading,
    posts,
    setPost,
    page,
    setPage,
    totalPages,
    setTotalPages,
    HandlePageChange,
    fetchBlogPost
  }


   return <AppContext.Provider value={value}>
    {children}
   </AppContext.Provider>


 }