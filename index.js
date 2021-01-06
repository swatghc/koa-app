const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello Manny';
});

app.listen(3000);
