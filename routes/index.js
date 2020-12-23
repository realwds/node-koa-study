const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(bodyParser())

router.get('/', async (ctx, next) => {
  ctx.body = '<h3>home page</h3>'
})

router.get('/get', async (ctx, next) => {
  let id = ctx.request.query.id
  ctx.body = {
    id,
    code: 1
  }
})

router.get('/get/:id', async (ctx, next) => {
  let id = ctx.request.params.id
  ctx.body = {
    id,
    code: 1
  }
})

router.post('/post', async (ctx, next) => {
  //设置允许跨域
  ctx.set('Access-Control-Allow-Origin', '*')
  console.log(ctx.request.body)
  ctx.body = {
    code: 1,
    postParams: ctx.request.body
  }
})


module.exports = router