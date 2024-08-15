import React from 'react'

const DisplayDate = () => {
  let d = new Date();
  d = d.toString().slice(0, 15);

  return (
    <div>
      <h1 className="text-5xl text-white font-bold">My Day</h1>
      <h1 className='text-xl pt-5 text-white'>{` ${d}`}</h1>
    </div>
  )
}

export default DisplayDate