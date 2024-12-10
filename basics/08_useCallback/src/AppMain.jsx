import React from "react";
import { useState } from "react";
import UseCallbackOnE from "./UseCallbackOnE.JSX";
import { useCallback } from "react";
const AppMain = () => {
  const [count, setCount] = useState(0);
  const [decrement, setdecrement] = usSetate(100);

  // function loading(){
  //   console.log("loading function going on");
  // }

  const loading = useCallback(
    function loading() {
      console.log("loading function going on");
    },
    [decrement]
  );

  return (
    <div>
  
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <UseCallbackOnE loading={loading} decrement={decrement} />

      <button onClick={() => setdecrement(decrement - 1)}>decrement</button>
    </div>
  );
};

export default AppMain;
