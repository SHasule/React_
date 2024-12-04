import React from 'react'

function Filter({filterData,apiUrl}) {
  return (
    <div>
    {filterData.map((data)=>{
      return( 
         <button key={data.id} >{data.title}</button>
        )
       })}
    </div>
  )
}

export default Filter