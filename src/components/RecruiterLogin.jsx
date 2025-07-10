import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const RecruiterLogin = () => {
  const [state, setState] = useState('Login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(false);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);
  const {setshowRecruiterLogin} = useContext(AppContext)
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Step 1 of Sign Up → switch to Step 2
    if (state === 'Sign Up' && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
      return;
    }

    // Final submit
    console.log('Form submitted:', {
      name,
      email,
      password,
      image,
    });

    if (state === 'Login') {
      // login API call
    } else {
      // sign up API call
    }
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () =>{
      document.body.style.overflow = 'unset'
    }
  },[])

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form onSubmit={onSubmitHandler} className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>

        <p className="text-sm text-center">
          Welcome back! Please sign in to continue
        </p>

        {/* Step 1 of Sign Up */}
        {state === 'Sign Up' && !isTextDataSubmitted && (
          <>
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className="w-16 rounded-full"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt="upload"
                />
              </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                hidden
              />
              <div>
                Upload Company <br /> Logo
              </div>
            </div>

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.person_icon} alt="" />
              <input
                className="outline-none text-sm"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Company Name"
                required
              />
            </div>
          </>
        )}

        {/* Common: Email */}
        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.email_icon} alt="" />
          <input
            className="outline-none text-sm"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email Id"
            required
          />
        </div>

        {/* Common: Password */}
        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.lock_icon} alt="" />
          <input
            className="outline-none text-sm"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
          />
        </div>

       {state === "Login" && <p className="text-sm text-blue-600 mt-4 cursor-pointer">
          Forgot password ?
        </p> }


        { /* Button */}
        <button type="submit" className=" mt-4 bg-blue-600 w-full text-white py-2 rounded-full">
          {state === 'Login' ? 'Login' : isTextDataSubmitted ? 'Create Account' : 'Next'}
        </button>

        {/* Toggle between Login / Sign Up */}
        {state === 'Login' ? (
          <p className="mt-5 text-center">
            Don’t have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={() => {
              setState('Sign Up');
              setIsTextDataSubmitted(false); // Reset form step
            }}>
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={() => {
              setState('Login');
              setIsTextDataSubmitted(false); // Reset form step
            }}>
              Login
            </span>
          </p>
        )}
        <img onClick={e  => setshowRecruiterLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
      </form>
    </div>
  );
};

export default RecruiterLogin;