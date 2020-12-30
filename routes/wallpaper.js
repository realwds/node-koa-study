/*
 * @Description: 360壁纸接口 
 * @version: V1.0.0
 * @Author: realwds
 * @Date: 2020-12-30 14:31:21
 * @LastEditTime: 2020-12-30 14:45:46
 */
const router = require('koa-router')()

router.get('/', async(ctx, next) => {
  ctx.body = '<h3>wapllpaper api</h3>'
})


module.exports = router
