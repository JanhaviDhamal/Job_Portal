import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../src/pages/Home";
import ApplyJob from "../src/pages/ApplyJob";
import Applications from "./pages/Applications"
const app = ()=>{
  return(
    <div>
      <Routes>
        <Route path = '/' element = {<Home />}/>
         <Route path = '/apply-job/:id' element = {<ApplyJob />}/>
          <Route path = '/applied-jobs' element = {<Applications />}/>
      </Routes>
    </div>
  )
}
export default app;