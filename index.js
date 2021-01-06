const Koa = require('koa');
const app = new Koa();

// add a date method to the context
app.context.date = Date();
app.context.userData = {
  'first': 'Manny',
  'last': 'Henri',
}

// response
app.use(ctx => {

  if (ctx.userData) {
    return ctx.response.body = ctx.userData;
  } else {
    return ctx.throw(400, 'Data required!');
  }
});

app.listen(3000);
