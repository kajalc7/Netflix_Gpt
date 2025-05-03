import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"Gpt",
    initialState:{
        showgptSearch:false,
        movieResults:null,
        movieNames:null,
    },
    reducers:{
        toggleGptSearchView : (state) => {
            state.showgptSearch = !state.showgptSearch;
        },
        addGptMoviesResults:(state,action) =>{
            const {movieNames,movieResults} = action.payload;
            state.movieNames =movieNames;
            state.movieResults = movieResults;
       }
    },
   

});
export const{toggleGptSearchView,addGptMoviesResults} = gptSlice.actions;
export default gptSlice.reducer;