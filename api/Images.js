const Router = require('koa-router')
var router = Router({
  prefix: '/images'
})  //Prefixed all routes with /images

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
  this.throw('Not Implemented', 501)
})

module.exports = router
