import KoaRouter from '@koa/router';

const exampleRouter = new KoaRouter({
  prefix: '/example',
});

exampleRouter.get('/', (ctx) => {
  ctx.body = 'example';
});

export default exampleRouter;
