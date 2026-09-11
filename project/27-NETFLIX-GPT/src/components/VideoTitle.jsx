import React from 'react'

const VideoTitle = ({original_title,overview}) => {
  return (
    <div className="pt-36 px-12">
       <h1 className="text-6xl font-bold">{original_title}</h1>
       <p className="py-6 text-lg w-1/4">{overview}</p>

       <div>
        <button className="bg-gray-500 text-black px-6 py-3 rounded-md font-bold cursor-pointer hover:bg-opacity-80">▶Play</button>
        <button className=" mx-2 bg-gray-500 text-white px-6 py-3 rounded-md font-bold cursor-pointer  hover:bg-opacity-80">More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle
