import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestoMenu from "./component/RestoMenu";
import { lazy,Suspense} from "react"
import ShimmerUi from "./component/ShimmerUi" 
import {useContext,useState,useEffect} from "react"
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
const App = () => {
const [userName,setUserName]=useState()

  useEffect(() => {
    const data={
      user:"suraj"
    }
   setUserName(data.user)
  }, [])

  return (
      <Provider store={appStore}>
          <UserContext.Provider value={{LoggedUser:userName,setUserName}} >
          <Header/> 
          <Outlet/>
          </UserContext.Provider>
      </Provider>
     
  );
};

const Grocery=lazy(()=>import("./component/Grocery"));


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
       {
         path:"/grocery",
         element:<Suspense fallback={<ShimmerUi/>} ><Grocery/></Suspense>
       },

       {
        path:"/restaurant/:resId",
        element:<RestoMenu/>
      }
      ],
      errorElement:<Error/>,
      
   }, 
    
   ])

export default Approute;