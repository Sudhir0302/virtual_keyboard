import React from 'react'

const Mobile = () => {
  const keys = Array.from(Array(26), (_, i) => String.fromCharCode(i + 97));

  return (
    <div className="text-black text-xl md:text-4xl">
      <br />
      <h1 className="text-center">Virtual Keyboard</h1>
      <br />
      <div className="flex flex-col items-center space-y-2">
        <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
          {keys.slice(0, 13).map((d, index) => (
            <button key={index} className="border-2 border-black w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center p-4 sm:p-6 hover:bg-slate-800 hover:text-white focus:bg-slate-500 focus:text-white">
              {d}
            </button>
          ))}
        </div>
        <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
          {keys.slice(13, 26).map((d, index) => (
            <button key={index} className="border-2 border-black w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center p-4 sm:p-6 hover:bg-slate-800 hover:text-white focus:bg-slate-500 focus:text-white">
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mobile;
