import { configureStore } from "@reduxjs/toolkit";
import  userReducer from './userSlice'
import moviesReducer from './movieSlice'
import gptreducer from './GptSlice'
import configSlice from './configSlice'


const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies: moviesReducer,
            gpt: gptreducer,
            config: configSlice
        },
    }
);

export default appStore;