const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

let urls = fs.readdirSync(__dirname + '/routes')

urls.forEach((element) => {
	//routes里的js接口文件
	let module = require(__dirname + '/routes/' + element)
	//routes里的文件名作为 路由名
	router.use('/' + element.replace('.js', ''), module.routes())
})

//使用中间件
app
	.use(router.routes())
	.use(router.allowedMethods())
	.listen(3000)

console.log('app started at port 3000...')
