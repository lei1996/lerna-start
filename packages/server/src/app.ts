import Koa from 'koa';
import KoaLogger from 'koa-logger';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import routers from './routers';

const app = new Koa();

const httpServer = createServer(app.callback());
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:8080'] || '*',
    credentials: true,
  },
  pingTimeout: 10000,
  pingInterval: 5000,
});

app.use(KoaLogger());
routers.forEach((router) => {
  app.use(router.routes());
  app.use(router.allowedMethods());
});

app.use((ctx) => {
  ctx.body = 'hello';
});

// 创建一个user 路由 的 命名空间
const userIo = io.of('/user');
userIo.on('connection', (socket: Socket) => {
  console.log('connection userIo success!', socket.id);
});

// 监听客户端建立连接
io.on('connection', (socket: Socket) => {
  console.log('connection', socket.id);

  // 监听 socket 客户端传递过来的 message 事件的 数据 ctx.
  socket.on('message', (ctx) => {
    console.log(ctx, '服务端消息');

    // 发送到 除去发出消息者的其他人.
    socket.broadcast.emit('message', ctx);

    // 发送给某个room 房间 比如群聊的用户.
    socket.to('room id').emit('message', ctx);
  });

  socket.on('joinRoom', (ctx) => {
    // 这里是将用户加入某个 room 或者 array[room] 房间
    socket.join(ctx);
  });

  // socket.use();

  // 断开连接
  socket.on('disconnection', () => {
    console.log('disconnection');
  });
});

// io.use();

export default httpServer;
