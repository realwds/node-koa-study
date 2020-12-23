const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(bodyParser())

router.get('/', (ctx, next) => {
	ctx.body = '<h3>别看了，这是我的接口地址首页</h3>'
})

router.get('/get', (ctx, next) => {
	let id = ctx.request.query.id
	ctx.body = {
		id,
		code: 1
	}
})

router.get('/get/:id', (ctx, next) => {
	let id = ctx.request.params.id
	ctx.body = {
		id,
		code: 1
	}
})

router.post('/post', (ctx, next) => {
	//设置允许跨域
	ctx.set('Access-Control-Allow-Origin','*')
	console.log(ctx.request.body)
	ctx.body = {
		code: 1,
		postParams: ctx.request.body
	}
})


//使用中间件
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
console.log('app started at port 3000...')
