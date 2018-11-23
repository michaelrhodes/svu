var surl = require('./short')
var share = require('./share')
var embed = require('./embed')

module.exports = parse

function parse (url, cb) {
  surl.pattern.test(url) ?
    surl.expand(url, function (err, url) {
      err ? cb(err) : then(url)
    }) :
    process.nextTick(function () {
      then(url)
    })

  function then (url) {
    var parsed = null

    if (share.pattern.test(url))
      parsed = share.parse(url)

    else if (embed.pattern.test(url))
      parsed = embed.parse(url)

    cb(null, parsed)
  }
}
