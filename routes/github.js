const router = require('koa-router')()
const axios = require('axios')
const baseConfig = require("../config/base")

router.get('/', async(ctx, next) => {
  ctx.body = '<h3>github api</h3>'
})

//回调跳转
router.get('/redirect', async(ctx, next) => {
  const requestToken = ctx.request.query.code
  const tokenResponse = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token?' +
      `client_id=${baseConfig.clientID}&` +
      `client_secret=${baseConfig.clientSecret}&` +
      `code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  })
  const accessToken = tokenResponse.data.access_token
  ctx.body = `redirect`
  ctx.response.redirect(`${baseConfig.redirectUri}?access_token=${accessToken}`)
})

//获取用户信息
router.get('/user', async(ctx, next) => {
  const accessToken = ctx.request.query.access_token
  const result = await axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  })
  ctx.body = {
    data: result.data,
    copyright: `${baseConfig.copyright}`
  }
})

//获取夹
router.get('/cdnContent', async(ctx, next) => {
  const accessToken = ctx.request.query.access_token
  const loginAddress = ctx.request.query.login_address
  const result = await axios({
    method: 'get',
    url: `https://api.github.com/repos/${loginAddress}/cdn/contents`,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  })
  ctx.body = {
    data: result.data,
    copyright: `${baseConfig.copyright}`
  }
})

//获取文件
router.get('/cdnFile', async(ctx, next) => {
  const accessToken = ctx.request.query.access_token
  const contenURL = ctx.request.query.content_url
  const result = await axios({
    method: 'get',
    url: contenURL,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  })
  ctx.body = {
    data: result.data,
    copyright: `${baseConfig.copyright}`
  }
})

module.exports = router
