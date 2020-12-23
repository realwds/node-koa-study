const router = require('koa-router')()

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
  console.log(ctx.request)
  ctx.body = {
    code: 1,
    postParams: ctx.request.body
  }
})

module.exports = router
