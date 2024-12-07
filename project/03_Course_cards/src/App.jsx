import { useEffect, useState } from 'react'
import Filter from './componet/Filter'
import Header from './componet/Header'
import Cards from './componet/Cards'
import './App.css'
import {filterData,apiUrl} from "./Data"
import { toast } from 'react-toastify'
import Loading from './componet/Loading'


function App() {
  const [apiData, setApiData] = useState(null)
  const [loading,setLoading]=useState(true)
  const [category,setcategory]=useState("All")

  async function fetchData(){
                        setLoading(true)
          try {
                    let result=await fetch(apiUrl);
                    let response=await result.json()
                      setApiData(response.data)
                      console.log(response.data);
                      
              } 
              catch (error)
              {
                 toast.error("ERROR:something went wrong")        
               }

               setLoading(false)
       }

      useEffect(()=>{
                       fetchData()
               },[])



  return (
  <div>

     <div>
        <Header />
     </div>

     <div>
          <Filter filterData={filterData} category={category} setcategory={setcategory} />
     </div>

     <div>
      {
        loading?
         (<Loading/>)
        :(<Cards apiData={apiData} category={category} setcategory={setcategory} />)
      }
         
     </div>

  </div>
  )
}

export default App
