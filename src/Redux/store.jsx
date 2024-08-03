import {configurestore} from "@reduxjs/toolkit"
import movieslice from "./Slices/MovieSlice"

const mystore = configurestore({
    reducer:{
        movies:movieslice
    }
})
export default mystore