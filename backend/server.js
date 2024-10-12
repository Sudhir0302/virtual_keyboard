const WebSocket=require('ws');

const server=new WebSocket.Server({port: 3333});

server.on('connection',(socket) =>{
    console.log('A client connected');

    socket.on('message',(message)=>{
        server.clients.forEach((client) =>{
            if(client!==socket&&client.readyState===WebSocket.OPEN){
                client.send(message.toString());
            }
        })
    });
});

console.log('server runnning on port 3333');