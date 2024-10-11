import React from 'react'

const Desktop = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <br/>
      <h1 className='text-2xl'>TEXT AREA</h1>
      <br />
      <div className='flex justify-center items-start'>
        <textarea
          className="bg-white w-96 border-black border h-80 text-black text-xl p-4"
          placeholder="Type here..."
        />
      </div>
    </div>
  )
}

export default Desktop
