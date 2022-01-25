const { Socket } = require('dgram');
const net = require('net');

const server = net.createServer();

server.on('connection', (Socket)=>{
    Socket.on('data', (data)=>{
        console.log(data);
        Socket.write('Recibido');
    })

    Socket.on('close', ()=>{
        console.log('Comunicacion finalizada');
    })

    Socket.on('error', (err)=>{
        console.log(err.message);
    })
} )


server.listen(50000, ()=>{
    console.log(server.address().port);
})