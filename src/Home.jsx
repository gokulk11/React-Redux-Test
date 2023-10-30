import React,{useEffect} from 'react'
import meme from './meme'
import Hero from './Hero';
import { useDispatch } from "react-redux";
import { addMeme } from './features/memeSlice';


const Home = () => {

    const dispatch = useDispatch();
    const memeData =dispatch(addMeme(meme.data.memes))
    

  return (
    <div>
        <Hero/>
    </div>
  )
}

export default Home