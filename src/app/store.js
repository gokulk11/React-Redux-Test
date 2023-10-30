import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "../features/memeSlice"

export default configureStore({
    reducer:{
        meme:memeReducer,
    }
})