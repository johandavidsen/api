/** Load dependencies */
let koa = require('koa')
let router = require('koa-router')({ prefix: '/authorization' })
let jwt = require('jsonwebtoken')

/** Setup the application settings */
let app = koa()
app.name = 'api-authorization'

// Create the authorization route GET
router.get('/', function *() {
  this.throw('Not Implemented', 501)
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
  // Set cert key based on environment
  let cert = 'development'
  if (process.env.NODE_ENV === 'production') {
    // This is the letsencrypt private key
    cert = '/etc/letsencrypt/live/api.fjakkarin.com/privkey.pem'
  }
  // Create a token
  let token = jwt.sign(
    { scopes: { images: { actions: [ 'get', 'store' ] } } },
    cert
  )
  this.body = token
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

// tell app to use routes
app.use(router.routes())

app.listen(3003)
