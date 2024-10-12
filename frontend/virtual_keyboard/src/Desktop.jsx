import React, { useEffect, useState } from 'react'

const Desktop = () => {

    const[input,setInput]=useState('');

    useEffect(() =>{
        const socket= new WebSocket('ws://192.168.38.51:3333');

        socket.onmessage =(event)=>{
            const msg=JSON.parse(event.data);
            if(msg.key==='BACKSPACE'){
                setInput((prevInput) => prevInput.slice(0, -1));
            }
            else if(msg.key==='SPACE'){
              setInput((prevInput)=>prevInput+' ');
            }
            else{
                setInput((prevInput)=>prevInput+msg.key);
            }
        };

        return ()=>{
            socket.close();
        }
    },[]);

  return (
    <div className='flex justify-center flex-col items-center'>
      <br/>
      <h1 className='text-2xl'>TEXT AREA</h1>
      <br />
      <div className='flex justify-center items-start'>
        <textarea
            value={input}
            className="bg-white w-96 border-black border h-80 text-black text-xl p-4"
            placeholder="Type here..."
        />
      </div>
    </div>
  )
}

export default Desktop
