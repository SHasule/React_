import React, { useEffect } from "react";

const FetchMatchData = (props) => {
  const match = props.match;
  const search=props.search;

  useEffect(()=>{
    console.log("value is : ",search);
  },[])
  

  return (
    <div>
      {
      match.status != "Match not started" ? (

         match.series.includes(search) ? 
         (
          <>
          <div>
          <h3>{match.series}</h3>
          <p>{match.matchType}</p>

          <div>
            <div>
              <img src={match.t1img} alt="" />
              <p>{match.t1}</p>
              <p>{match.t1s}</p>
            </div>

            <div>
              <img src={match.t2img} alt="" />
              <p>{match.t2}</p>
              <p>{match.t2s}</p>
            </div>
          </div>

          <p>Status : {match.status}</p>
          <hr />
        </div>
          </>
         ):
          (
          <>
          <p>no data found</p>
         </>)

        
      ) :
     
       (
        // <div>
        //   <h3>{match.series}</h3>
        //   <p>{match.matchType}</p>

        //   <div>
        //     <div>
        //       <img src={match.t1img} alt="" />
        //       <p>{match.t1}</p>
        //       <p>{match.t1s}</p>
        //     </div>

        //     <div>
        //       <img src={match.t2img} alt="" />
        //       <p>{match.t2}</p>
        //       <p>{match.t2s}</p>
        //     </div>
        //   </div>

        //   <p>Status : {match.status}</p>
        // </div>

        <div>
              No Matches Found
        </div>
      )
      }

      {/* <h3>{match.series}</h3>
      <p>{match.matchType }</p>

      <div>

      <div>
        <img src={match.t1img} alt="" />
        <p>{match.t1}</p>
        <p>{match.t1s}</p>
      </div>

      <div>
        <img src={match.t2img} alt="" />
        <p>{match.t2}</p>
        <p>{match.t2s}</p>
      </div>

      </div>

      <p>{match.status}</p> */}
      <div>
              No Matches Found
        </div>
    </div>
  );
};

export default FetchMatchData;
