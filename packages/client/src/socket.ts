import { io } from "socket.io-client";

const options = {
    // reconnectionDelay: 1000,
};

// 初始化实例
const socket = io('//localhost:7777', options);
const userSocket = io('//localhost:7777/user', options);


console.log(1111);

// 只要连接上了服务端，就会执行下面的代码. 这是主动连接
socket.on('connect', async () => {
    console.log('成功？', socket.id);
    socket.emit('message', '222222');
    
});

socket.on('disconnect', () => {
    console.log('断开连接');
})

export default socket;