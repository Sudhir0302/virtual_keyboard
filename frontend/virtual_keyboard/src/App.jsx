import React from 'react'
import './assets/App.css';

const App = () => {

  const keys = Array.from(Array(26), (_, i) => String.fromCharCode(i + 97));

  return (
    <div className='text-4xl text-black'>
      <h1 className='text-center'>Virtual Keyboard</h1><br></br>
      <div className="flex flex-wrap gap-3 justify-center"> 
      {keys.map((d, index) => (
        <button key={index} className="border-2 border-black w-10 h-10 flex items-center justify-center p-8 hover:bg-slate-800 hover:text-white focus:bg-slate-500 focus:text-white">
          {d}
        </button>
      ))}
      </div>
    </div>
  )
}

export default App