import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/FireBase';
import { Navigate, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react'
import { LOGO, Supported_Languages } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';




const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showgptSearch =  useSelector((store)=>store.gpt.showgptSearch) ;

  const user = useSelector((store)=>store.user)

  const handleSignOut=()=>{
      signOut(auth).
      then(() => {})
      .catch((error) => {
        navigate("/error");
});
}


useEffect(()=>{
   
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName,photoURL} = user;
       dispatch(addUser({
        uid:uid, 
        email: email, 
        displayName: displayName, 
        photoURL: photoURL}));
        navigate('/browse');
    }
    
     else {
      dispatch(removeUser())
      navigate('/');

    }
  });

    return () => unsubscribe();//unsubscibed called  when component unmount;
},[]);


const handleGPTSearchClick = () =>{
  //toggle gpt search
  dispatch(toggleGptSearchView());

}

const handleLanguageChange = (e) =>{
  dispatch(changeLanguage(e.target.value))
}

  return (
          <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src={LOGO} alt="logo" />

        {user && (
          <div className="flex p-2 items-center">
           {showgptSearch && (<select className="bg-teal-500 text-white px-6 py-2 rounded-lg mx-4 w-36 border-2 border-transparent focus:border-white focus:outline-none" onChange={handleLanguageChange}>
              {Supported_Languages.map(lang=> <option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>)}
            <button
              className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
              onClick={handleGPTSearchClick}
            >
              {showgptSearch? "Home Page" : "GPT Search"}
            </button>
            <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="user icon" />
            <button onClick={handleSignOut} className="font-bold text-white cursor-pointer">
              (Sign Out)
            </button>
          </div>
        )}
      </div>
  )
}

export default Header
