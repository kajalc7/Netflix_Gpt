import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { addUser} from '../utils/userSlice'
import { auth } from '../utils/FireBase';
import { useDispatch } from 'react-redux';
import { BG_LOGO, User_Avatar } from '../utils/constants';


const Login = () => {
  const dispatch =useDispatch();

  const[isSignInForm,setisSignInForm]= useState(true)
  const[errormessage,seterrormessage]=useState(null);

  const username= useRef(null);
  const email= useRef(null);
  const password = useRef(null);

  const handleButtonClick=()=>{
    
    console.log(email.current.value);
    console.log(password.current.value);
    //console.log(username.current.value);

    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const usernameValue = isSignInForm ? null : username.current?.value;

    const message = checkValidData(usernameValue, emailValue, passwordValue, isSignInForm);

   // console.log(message);
    seterrormessage(message);
    if(message) return;

    // signin and signup logic
    if(!isSignInForm){
      //signup logic
          createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: usernameValue, photoURL:User_Avatar,
        })
          .then(() => {
            const {uid, email, displayName,photoURL} = auth.currentUser;
                         dispatch(addUser({
                          uid:uid, 
                          email: email, 
                          displayName: displayName, 
                          photoURL: photoURL}));
           
        }).catch((error) => {
          seterrormessage(error.message)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormessage(errorCode+ "-" + errorMessage);
      });

    }
    else{
      //signin logic
              signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormessage(errorCode+ "-" + errorMessage);
            
          });
        }
  }

  const ToggleSignInForm =()=>{
      setisSignInForm(!isSignInForm);
  };

  
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src={BG_LOGO}
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
