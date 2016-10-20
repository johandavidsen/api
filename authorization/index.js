/** Load dependencies */
let koa = require('koa')
let router = require('koa-router')({ prefix: '/authorization' })

/** Setup the application settings */
let app = koa()
app.name = 'api-authorization'

// Create the authorization route GET
router.get('/', function *() {
  this.body = 'Home page'
})

// Create the authorization route PUT
router.put('/', function *() {
  this.throw('Not Implemented', 501)
})

// Create the authorization route PATCH
router.patch('/', function *() {
  this.throw('Not Implemented', 501)
})

// Create the authorization route DELETE
router.delete('/', function *() {
  this.throw('Not Implemented', 501)
})

// Create the authorization route POST
router.post('/', function *() {
  this.body = 'api'
})

// Setup a catch all route
app.use(function *(next) {
  try {
    yield next
  } catch (err) {
    this.status = err.status || 500
    this.body = err.message
    this.app.emit('error', err, this)
  }
})

app.use(router.routes())

app.listen(3003)
