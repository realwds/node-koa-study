module.exports = {
  mode: 'debug',

  //开发环境配置
  debug: {
    github: {
      // github Client ID
      clientID: '******************',
      // github Client secrets
      clientSecret: '******************',
      // github 前端回调地址
      redirectUri: 'http://localhost:8080/#/GitHub',
      //copyright
      copyright: 'https://github.com/realwds',
    },
    gitee: {
      // gitee Client ID
      clientID: '******************',
      // gitee Client secrets
      clientSecret: '******************',
      // gitee前端回调地址
      redirectUri: 'http://localhost:8080/#/GitEe',
      // gitee应用回调地址 
      callBackUri: 'http://localhost:3000/gitee/redirect',
      // github copyright
      copyright: 'https://githee.com/realwds',
    }
  },

  //生产环境配置
  release: {
    github: {
      // github Client ID
      clientID: '******************',
      // github Client secrets
      clientSecret: '******************',
      // github 前端回调地址
      redirectUri: 'http://localhost:8080/#/GitHub',
      // github copyright
      copyright: 'https://github.com/realwds',
    },
    gitee: {
      // gitee Client ID
      clientID: '******************',
      // gitee Client secrets
      clientSecret: '******************',
      // gitee前端回调地址
      redirectUri: 'http://localhost:8080/#/GitEe',
      // gitee应用回调地址 
      callBackUri: 'http://localhost:3000/gitee/redirect',
      // github copyright
      copyright: 'https://githee.com/realwds',
    }
  }
  
}