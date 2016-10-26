/** Load dependencies */
let fs = require('fs')
let path = require('path')
let koa = require('koa')
let router = require('koa-router')({ prefix: '/v1/images' })
let parse = require('co-busboy')

/** Setup app */
let app = koa()
app.name = 'api-upload'

/** Setup routes */
router.get('/', function *() {
  this.throw('Not Implemented', 501)
})

router.put('/', function *() {
  this.throw('Not Implemented', 501)
})

router.post('/', function *(next) {
  // Check permission
  // the body isn't multipart, so busboy can't parse it
  if (!this.request.is('multipart/*')) return yield next

  var parts = parse(this, {
    autoFields: true,
    checkFile: function (fieldname, file, filename) {
      if (fieldname === 'image') {
        if (path.extname(filename) !== '.jpg') {
          var err = new Error('invalid jpg image')
          err.status = 400
          return err
        }
      } else {
        let wrongName = new Error('Wrong field name; field name should be "image"')
        wrongName.status = 400
        return wrongName
      }
    }
  })
  var part
  // Process file
  while (part = yield parts) {
    // it's a stream
    part.pipe(fs.createWriteStream('some file.jpg'))
    // Save file to database
    // Remove file from file storage
  }
  
  this.response.status = 201
})

router.delete('/', function *() {
  this.throw('Not Implemented', 501)
})
// tell app to use routes
app.use(router.routes())
app.listen(3003)
module.exports = app
