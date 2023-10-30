import React from 'react'

const Details = (props) => {

    const {data} = props;

  return (
    <div className='meme-data'>
        <img src={data.url} alt="" />
    </div>
  )
}

export default Details