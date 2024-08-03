import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name:"movies",
    initialState:{
        movies:[]
    },
    reducers:{
        addMovies:(state,action)=>{
            state.movies = action.payload
        }
    }
})
export const {addMovies} = movieslice.actions
export default movieslice.reducer