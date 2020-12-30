/*
 * @Description: 测试页
 * @version: V1.0.0
 * @Author: realwds
 * @Date: 2020-12-23 12:03:06
 * @LastEditTime: 2020-12-30 14:45:27
 */
const router = require('koa-router')()

router.get('/', async(ctx, next) => {
  ctx.body = '<h3>index api</h3>'
})

router.get('/get', async(ctx, next) => {
  let id = ctx.request.query.id
  ctx.body = {
    id,
    code: 1
  }
})

router.get('/get/:id', async(ctx, next) => {
  let id = ctx.request.params.id
  ctx.body = {
    id,
    code: 1
  }
})

router.post('/post', async(ctx, next) => {
  ctx.body = {
    code: 1,
    postParams: ctx.request.body
  }
})

module.exports = router
