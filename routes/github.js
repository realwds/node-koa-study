const router = require('koa-router')()
const axios = require('axios')
const { copyFile } = require('fs/promises')

const clientID = '9801841099bc8a201d2f'
const clientSecret = '36580299c33ae6c26cbccdf90614adf0eaa7d3ec'

router.get('/', async(ctx, next) => {
  ctx.body = '<h3>github api</h3>'
})

router.get('/redirect', async(ctx, next) => {
  const requestToken = ctx.request.query.code
  const tokenResponse = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token?' +
      `client_id=${clientID}&` +
      `client_secret=${clientSecret}&` +
      `code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  })
  const accessToken = tokenResponse.data.access_token
  ctx.body = `code: ${requestToken}***************clientID：${clientID}****************clientSecret：${clientSecret} ***************accessToken：${accessToken}`
  ctx.response.redirect(`http://localhost:8080/#/GitHub?access_token=${accessToken}`)
})

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
    copyright: 'https://github.com/realwds'
  }
})

module.exports = router
