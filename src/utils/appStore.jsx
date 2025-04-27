import { configureStore } from "@reduxjs/toolkit";
import  userReducer from './userSlice'
import moviesReducer from './movieSlice'
import gptreducer from './GptSlice'


const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies: moviesReducer,
            gpt: gptreducer,
        },
    }
);

export default appStore;