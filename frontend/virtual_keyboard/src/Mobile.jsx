import React, { useEffect, useState } from 'react';

const Mobile = () => {
  const firstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const secondRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const thirdRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  const[msg,setMsg]=useState('');
  const num=[0,1,2,3,4,5,6,7,8,9];
  const [ws, setWs] = useState(null);
  const [cap,setCap]=useState(false);
  const [isnum,setIsNum]=useState(false);

  useEffect(() => {
    const socket = new WebSocket('ws://192.168.38.51:3333');
    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  function handleKeyPress(key) {
    if (ws && ws.readyState === WebSocket.OPEN) {
      let message = '';

      switch (key) {
        case 'BACKSPACE':
          message = 'BACKSPACE'; 
          setMsg((prev) => prev.slice(0,-1));
          break;
        case 'ENTER':
          message = 'ENTER';
          setMsg((prev) => prev + '\n');
          break;
        case ' ':
          message = 'SPACE';
          setMsg((prev) => prev + ' ');
          break;
        default:
          if(cap){
            message = key.toUpperCase(); 
            setMsg((prev) => prev + message);
          }else{
            message=key;
            setMsg((prev) => prev + message);
          }
      }

      ws.send(JSON.stringify({ key: message }));
    }
  }

  return (
    <div className="text-black text-lg sm:text-xl md:text-4xl">
      <br />
      <h1 className="text-center">Virtual Keyboard</h1>
      <br />
      <div className="flex flex-col items-center space-y-2 mb-3">
        <textarea 
          value={msg}
          placeholder='Typed msg...'
          className='bg-white w-96 h-60 border-black border text-black text-xl p-4'
        />
      </div>
      <div className="flex flex-col items-center space-y-2">
        {isnum&&
          <div className='flex gap-1 justify-center'>
            {num.map((d,index)=>(
              <button 
              key={index}
              onClick={() => handleKeyPress(d)}
              className="border-2 border-black w-8 h-8 hover:bg-slate-700 hover:text-white"
              >
                {d}
              </button>
            ))}
          </div>
        }
        <div className="flex gap-1 justify-center">
          {firstRow.map((d, index) => (
            <button
              key={index}
              onClick={() => handleKeyPress(d)}
              className="border-2 border-black w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-slate-700 hover:text-white"
            >
              {d}
            </button>
          ))}
        </div>
        <div className="flex gap-1 justify-center">
          {secondRow.map((d, index) => (
            <button
              key={index}
              onClick={() => handleKeyPress(d)}
              className="border-2 border-black w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-slate-700 hover:text-white"
            >
              {d}
            </button>
          ))}
        </div>
        <div className="flex gap-1 justify-center">
          {thirdRow.map((d, index) => (
            <button
              key={index}
              onClick={() => handleKeyPress(d)}
              className="border-2 border-black w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-slate-700 hover:text-white"
            >
              {d}
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="hover:bg-slate-700 hover:text-white p-2 border-2 border-black w-36 sm:w-40"
            onClick={() => handleKeyPress(' ')}
          >
            SPACE
          </button>
        </div>
        <div className="flex flex-col justify-center mt-4 gap-3">
          <button
            className={`p-2 border-2 border-black w-36 sm:w-40 mt-2 ${isnum ? 'bg-black text-white' : ''}`}
            onClick={() =>setIsNum(!isnum)}
          >
            number
          </button>
          <button
            className="hover:bg-slate-700 hover:text-white p-2 border-2 border-black w-36 sm:w-40"
            onClick={() => handleKeyPress('BACKSPACE')}
          >
            BACKSPACE
          </button>
          <button
            className="hover:bg-slate-700 hover:text-white p-2 border-2 border-black w-36 sm:w-40 mt-2"
            onClick={() => handleKeyPress('\n')}
          >
            ENTER
          </button>
          <button
            className={`p-2 border-2 border-black w-36 sm:w-40 mt-2 ${cap ? 'bg-black text-white' : ''}`}
            onClick={() =>setCap(!cap)}
          >
            CAPS LOCK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
