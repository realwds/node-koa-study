module.exports = {
  mode: 'debug', // 上线前更改 mode
  // 开发环境配置
  debug: {
    // github Client ID
    clientID: '******************',
    // github Client secrets
    clientSecret: '******************',
    // 前端回调地址
    redirectUri: 'http://localhost:8080/#/GitHub',
    // copyright
    copyright: 'https://github.com/realwds',
  },
  // 生产环境配置
  release: {
    // github Client ID
    clientID: '******************',
    // github Client secrets
    clientSecret: '******************',
    // 前端回调地址
    redirectUri: 'http://localhost:8080/#/GitHub',
    // copyright
    copyright: 'https://github.com/realwds',
  }
}