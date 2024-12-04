import { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import './App.css'
import { apiUrl,filterData } from './Data'
import Filter from './component/Filter'
import Cards from './component/Cards'
import { toast } from 'react-toastify'
function App() {
  const [course, setCourses] = useState(null)
 

 useEffect(()=>{
  const fetchData=async()=>{
    try{
  const res=await fetch(apiUrl);
  const output=await res.json();

  console.log(output);
  setCourses(output.data)
    }
    catch(error){
   toast.error("something went wrong")
    }
  }
  fetchData();
 },[])

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
       <Cards courses={course}/>      
      
    </div>
  )
}

export default App
