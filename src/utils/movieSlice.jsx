import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState : {
        nowPLayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies :(state, action) => {
            state.nowPLayingMovies = action.payload;
        },
    },
});


export const {addNowPlayingMovies} =  moviesSlice.actions;
export default moviesSlice.reducer;