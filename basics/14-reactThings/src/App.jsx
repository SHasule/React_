import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
       <Header/> 
       <Outlet/>
     </div>
  );
};

const Approute=createBrowserRouter(
  [ 
    { 
      path:"/",
      element:<App/>,
      children:[
        {
            path:"/",
            element:<Body/>
        },
        { 
          path:"/about", 
          element:<About/>
        }, 
      {
         path:"/contact",
         element:<Contact/>
       },
      ],
      errorElement:<Error/>
   }, 
    
   ])

export default Approute;