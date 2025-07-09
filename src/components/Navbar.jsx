import React, { useContext } from "react";

import {assets} from "../assets/assets.js"
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = ()=>{
  const navigate = useNavigate();
  const {openSignIn} = useClerk()
  const{user} = useUser()
  const {setshowRecruiterLogin} = useContext(AppContext)
  return(

   <div className="shadow py-4">
    <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img onClick={() => navigate('/')} className="cursor-pointer" src={assets.logo} alt=""/>
        {
          user
          ?<div className="flex items-center gap-3">
            <Link to="/applied-jobs">Applied Jobs  | </Link>
           
            <p className="max-sm:hidden">Hello, {user.firstName+" " + user.lastName}</p>
            <UserButton />
          </div>
          :<div className="flex gap-4 max-sm:text-xs">
            <button onClick={e => setshowRecruiterLogin(true)} className="text-gray-600">Recruiter login</button>
            <button onClick={e => openSignIn()} className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full">Login</button>
        </div>
        }
        
    </div>

   </div>
  )
}
export default Navbar;