import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {
  const[isSignInForm,setisSignInForm]= useState(true)
  const[errormessage,seterrormessage]=useState(null);

  const username= useRef(null);
  const email= useRef(null);
  const password = useRef(null);

  const handleButtonClick=()=>{
    //validate form data will be using utility which we have created under utils
    //now we want reference of input field and password as onsignin click we need to get the field data entered and validate for that 
    //we are using ref hook
    console.log(email.current.value);
    console.log(password.current.value);
    //console.log(username.current.value);
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const usernameValue = isSignInForm ? null : username.current?.value;

    const message = checkValidData(usernameValue,emailValue,passwordValue);

   // console.log(message);
    seterrormessage(message);

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
      <form  onSubmit={(e)=> e.preventDefault()}//this will help us to prevent to submit the form and will prevent reloading also
      className="w-3/12 absolute p-12 bg-[rgba(0,0,0,0.7)]  my-36  mx-auto right-0 left-0 text-white rounded-lg">
      <h1 className="font-bold text-3xl py-4">
        {isSignInForm? "Sign In" : "Sign Up"}
        </h1>
      {!isSignInForm && <input //condition && doSomething()
        ref={username}
        type="text"
        placeholder=" UserName"
        className="w-full p-3 mb-6 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
      />}
      <input
          ref={email}
          type="text"
          placeholder="Email or Mobile number"
          className="w-full p-3 mb-4 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
        />
        
        <p className="text-red-400 font-semibold text-lg  py-3"> {errormessage}</p>
        <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold cursor-pointer" onClick = {handleButtonClick} >
          {isSignInForm? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={ToggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now" : "Already Registered? Please SignIn"}</p>
      </form>
    </div>
  )
}

export default Login
