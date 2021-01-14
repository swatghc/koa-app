const Koa = require('koa');
const app = new Koa();

app.context.userData = {
  'first': 'Manny',
  'last': 'Henri',
}


// log
app.use(async (ctx, next) => {
  // Do something before the next middleware
  await next();

  // Do something after the next middleware
  const responseTime = ctx.response.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${responseTime}`);
})

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const millisecond = Date.now() - start;
  ctx.set('X-Response-Time', `${millisecond}ms`);
})

// response
app.use(async (ctx) => {
  ctx.response.body = ctx.userData;
});

app.listen(3000);

// a


// b
