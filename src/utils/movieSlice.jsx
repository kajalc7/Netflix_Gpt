import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState : {
        nowPLayingMovies: null,
        PopularMovies: null,
        trailerVideo:null
    },
    reducers: {
        addNowPlayingMovies :(state, action) => {
            state.nowPLayingMovies = action.payload;
        },
        addTrailerVideo : (state,action) =>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies :(state, action) => {
            state.PopularMovies = action.payload;
        },
    },
});


export const {addNowPlayingMovies, addTrailerVideo,addPopularMovies} =  moviesSlice.actions;
export default moviesSlice.reducer;