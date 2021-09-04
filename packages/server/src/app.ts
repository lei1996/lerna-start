import Koa from 'koa';
import KoaLogger from 'koa-logger';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import routers from './routers';

const app = new Koa();

const httpServer = createServer(app.callback());
const io = new Server(httpServer, {
  cors: {
    origin: '*',
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

io.on('connection', (socket: Socket) => {
  console.log('connection', socket.id);

  socket.on('message', (ctx) => {
    console.log(ctx, '服务端消息');
    
  })

  socket.on('disconnection', () => {
    console.log('disconnection');
  });
});

export default httpServer;
