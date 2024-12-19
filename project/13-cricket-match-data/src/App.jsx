import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FetchMatchData from "./component/FetchMatchData";
import Spinner from "./component/Spinner";
const App = () => {
  const [matches, setMatches] = useState([]);
  const [loader, setLoader] = useState(false);

  const ApiKey = "https://api.cricapi.com/v1/cricScore?apikey=67685d38-fdf8-4182-a032-15151a8f30e7";

  async function fetchData() {
    try {
      setLoader(true);
      const res = await fetch(ApiKey);
      const data = await res.json();
      setMatches(data.data);
    }
     catch (error) {
      console.log("ERROR: somthing went wrong");
      setMatches([]);
    }

    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
  <div>
    {
      loader ? 
      (<Spinner></Spinner>):

      (
          <div>
            {
              matches.length > 0 ?
              (
                <div>
                  {
                    matches.map((match)=>{
                      return(
                        console.log(match)
                        
                      )
                    })
                  }
                </div>
              ) :
              (
                <p>not found</p>
              )
            }
          </div>
      )
      
    }
     
  </div>
  );
};

export default App;
