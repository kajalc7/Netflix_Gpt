import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm,setisSignInForm]= useState(true)

  const handleButtonClick=()=>{
    //validate form data will be using utility which we have created under utils
    //checkValidData()

  }

  const ToggleSignInForm =()=>{
      setisSignInForm(!isSignInForm);
  };

  
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src=
       "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="BG_logo"/>
      </div>
      <form className="w-3/12 absolute p-12 bg-[rgba(0,0,0,0.7)]  my-36  mx-auto right-0 left-0 text-white rounded-lg">
      <h1 className="font-bold text-3xl py-4">
        {isSignInForm? "Sign In" : "Sign Up"}
        </h1>
      {!isSignInForm && <input //condition && doSomething()
        type="text"
        placeholder="Full Name"
        className="w-full p-3 mb-6 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
      />}
      <input
          type="text"
          placeholder="Email or Mobile number"
          className="w-full p-3 mb-4 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
        />
        
        <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold cursor-pointer" onClick = {handleButtonClick} >
          {isSignInForm? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={ToggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now" : "Already Registered? Please SignIn"}</p>
      </form>
    </div>
  )
}

export default Login
