import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md"
import { useDispatch,  } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'

const Cartitem = ({item,index}) => {


const dispatch=useDispatch()
  const removeitem=()=>{
    dispatch(remove(item.id))
    toast.error("item removed")
  }
  return (
    <div>

      <div>
        <img src={item.image} alt="" />
      </div>

      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
      </div>
      <div>
        <p>{item.price}</p>
      </div>

      <button onClick={removeitem}>
      <MdOutlineDeleteOutline />

      </button>
    </div>
  )
}

export default Cartitem