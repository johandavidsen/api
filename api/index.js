/**
 * @module API
 *
 * This REST API is buildt with inspiration from the [koa-boilerplate](https://github.com/koajs/api-boilerplate).
 */
/** Get the dependencies */
const koa = require('koa')
const responseTime = require('koa-response-time')
const compress = require('koa-compress')

/** Create the application instance */
const application = koa()

// x-response-time
application.use(responseTime())
// compression
application.use(compress())

// Load /images
const images = require('./Images')

application.use(images.routes())

application.use(function *() {
  this.body = 'Hello API'
})

if (!module.parent) application.listen(3000)
