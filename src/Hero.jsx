import React from 'react'
import { useSelector } from "react-redux";
import { getAllMeme } from "./features/memeSlice";
import Details from './Details';

const Hero = () => {
  const memes = useSelector(getAllMeme);
  console.log(memes)

   const renderMeme = memes.map((meme,index)=>{

        return(
            <Details key={index} data={meme}/>
        )

   })


  return (
    <div>
        <h2>Memes</h2>
        <div className='meme-container'>
          {renderMeme}
        </div>
    </div>
  )
}

export default Hero