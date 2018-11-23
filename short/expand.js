var https = require('https')
var pattern = require('./pattern')

module.exports = expand

function expand (url, cb) {
  var match = url.match(pattern)

  if (!match) return process.nextTick(function () {
    cb(new Error('Invalid short URL'))
  })

  if (match[1] !== 'https:') {
    url = url.replace(pattern, function (m, scheme, slug, offset, str) {
      return 'https:' + str.substr(offset + (scheme && scheme.length || 0))
    })
  }

  https.get(url, function (res) {
    cb(null, res.headers.location)
  }).on('error', cb)
}
