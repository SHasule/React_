import { RESTO_API } from "./constant";
import {useState,useEffect} from "react"
const useRestoMenu=(resId)=>{
  const [resInfo,setResInfo]=useState(null)

  useEffect(() => {
     fetchData()
  }, [])

      const fetchData=async()=>{
          let data=await fetch(RESTO_API+resId)
          let json=await data.json()
        setResInfo(json.data)
      }
  return resInfo;
}
export default useRestoMenu