import { createSlice } from "@reduxjs/toolkit";

export const memeSlice = createSlice(
    {
        name: 'meme',
        initialState: {
            meme:{}
        },
        reducers: { 
            addMeme:(state,action)=>{
                state.meme = action.payload
            }
        }

    }
)

export const { addMeme } = memeSlice.actions;
export const getAllMeme =(state)=> state.meme.meme
export default memeSlice.reducer
