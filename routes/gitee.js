/*
 * @Description: gitee接口
 * @version: V1.0.0
 * @Author: realwds
 * @Date: 2020-12-24 15:10:21
 * @LastEditTime: 2020-12-30 14:44:31
 */
const router = require('koa-router')()
const axios = require('axios')
const baseConfig = require("../config/base")
const commonBaseConfig = baseConfig[baseConfig.mode].gitee

router.get('/', async(ctx, next) => {
  ctx.body = '<h3>gitee api</h3>'
})

//回调跳转获取access_token
router.get('/redirect', async(ctx, next) => {
  const requestToken = ctx.request.query.code
  const tokenResponse = await axios({
    method: 'post',
    url: 'https://gitee.com/oauth/token?' +
      `grant_type=authorization_code&` +
      `code=${requestToken}&` +
      `client_id=${commonBaseConfig.clientID}&` +
      `redirect_uri=${commonBaseConfig.callBackUri}&` +
      `client_secret=${commonBaseConfig.clientSecret}`,
    headers: {
      accept: 'application/json'
    }
  })
  const accessToken = tokenResponse.data.access_token
  ctx.body = `redirect` 
  ctx.response.redirect(`${commonBaseConfig.redirectUri}?access_token=${accessToken}`)
})

//获取用户信息
router.get('/user', async(ctx, next) => {
  const accessToken = ctx.request.query.access_token
  const result = await axios({
    method: 'get',
    url: `https://gitee.com/api/v5/user`,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  })
  ctx.body = {
    data: result.data,
    copyright: `${commonBaseConfig.copyright}`
  }
})

module.exports = router
