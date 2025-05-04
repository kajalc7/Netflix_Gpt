import React, { useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/FireBase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, Supported_Languages } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showgptSearch = useSelector((store) => store.gpt.showgptSearch);
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe(); // Cleanup
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row items-center justify-between bg-black sm:bg-blue-900 md:bg-green-900">
      <img className="w-36 md:w-44 mb-2 md:mb-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
          {showgptSearch && (
            <select
              className="bg-teal-500 text-white px-4 py-2 rounded-lg w-36 border-2 border-transparent focus:border-white focus:outline-none"
              onChange={handleLanguageChange}
            >
              {Supported_Languages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 bg-purple-800 text-white rounded-lg"
            onClick={handleGPTSearchClick}
          >
            {showgptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="user icon" />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
