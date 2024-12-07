import React from 'react'

const Filter = ({filterData},props) => {
  const setcategory=props.setcategory
  // const category=props.category

  function handleCategory(title){
    setcategory(title)
  }
  return (
    <div>
        {
          filterData.map((data)=>(
            <button key={data.id}
           onClick={()=>handleCategory(data.title)}
            >{data.title}</button>
          ))
        }
    </div>
  )
}

export default Filter