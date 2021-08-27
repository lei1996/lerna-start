import Koa from 'koa';
import KoaLogger from 'koa-logger';
import routers from './routers';

const app = new Koa();

app.use(KoaLogger());
routers.forEach((router) => {
  app.use(router.routes());
  app.use(router.allowedMethods());
});

app.use((ctx) => {
  ctx.body = 'hello';
});

export default app;
