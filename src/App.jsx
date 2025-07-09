import React, { useContext } from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../src/pages/Home";
import ApplyJob from "../src/pages/ApplyJob";
import Applications from "./pages/Applications"
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./context/AppContext";

const app = ()=>{
  const {showRecruiterLogin} = useContext(AppContext)
     

  return(
    <div>
    { showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path = '/' element = {<Home />}/>
         <Route path = '/apply-job/:id' element = {<ApplyJob />}/>
          <Route path = '/applied-jobs' element = {<Applications />}/>
      </Routes>
    </div>
  )
}
export default app;