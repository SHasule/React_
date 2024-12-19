import React from 'react'

const FetchMatchData = (props) => {
  const match=props.match
  return (
    <div>

      <p>{match.id}</p>
    </div>
  )
}

export default FetchMatchData