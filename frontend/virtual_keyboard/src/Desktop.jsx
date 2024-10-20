import React, { useEffect, useState } from 'react'

const Desktop = () => {

    const[input,setInput]=useState('');

    const localWebSocketUrl = 'ws://localhost:8080/keyboard';
   const remoteWebSocketUrl = 'ws://192.168.38.51:8080/keyboard';
        // const remoteWebSocketUrl = 'ws://10.1.11.72:8080/keyboard';
    // Use OR operator to choose WebSocket URL
    const socketUrl = window.location.hostname === 'localhost' ? localWebSocketUrl : remoteWebSocketUrl;

    useEffect(() =>{
        const socket= new WebSocket(socketUrl);

        socket.onmessage = (event) => {
          // Split messages by newline
          const messages = event.data.split('\n');
      
          messages.forEach((message) => {
              if (message.trim()) { // Check if the message is not empty
                  try {
                      const msg = JSON.parse(message);
                      console.log(msg)
                      if (msg.key === 'BACKSPACE') {
                          setInput((prevInput) => prevInput.slice(0, -1));
                      } else if (msg.key === 'SPACE') {
                          setInput((prevInput) => prevInput + ' ');
                      } else {
                          setInput((prevInput) => prevInput + msg.key);
                      }
                  } catch (error) {
                      console.error('Error parsing message:', error);
                  }
              }
          });
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
