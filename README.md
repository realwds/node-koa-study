# node-koa-study

> A Koa.js project

## 快速上手

```bash
# clone the project
git clone https://github.com/realwds/node-koa-study.git

# enter the project directory
cd node-koa-study

# install dependency
npm i

# develop
npm run dev
```

## 系统学习

### nodemon 实时监听项目

```bash
# install dependency gobal
npm i nodemon -g

# enter the project directory
cd node-koa-study

# install dependency
npm i nodemon --save-dev
```

### 基础架构

```js
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

//使用中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
console.log('app started at port 3000...')
```

### GET 方法

```js
router.get('/', (ctx, next) => {
  ctx.body = '<h3>home page</h3>'
})

router.get('/get', (ctx, next) => {
  let id = ctx.request.query.id
  ctx.body = {
    id,
    code: 1,
  }
})

router.get('/get/:id', (ctx, next) => {
  let id = ctx.request.params.id
  ctx.body = {
    id,
    code: 1,
  }
})
```

### koa-bodyparser POST 方法参数解析

```js
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
```

### POST 方法

```js
router.post('/post', (ctx, next) => {
  //设置允许跨域
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = {
    code: 1,
    postParams: ctx.request.body,
  }
})
```

Copyright © 2020 realwds
