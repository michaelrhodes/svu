var pattern = require('./pattern')

module.exports = parse

function parse (url) {
  var match = url.match(pattern)
  if (!match) return null

  var data = {}

  match[1].split('!').forEach(function (kv) {
    var key = kv.substr(0, 2)
    var val = kv.substr(2)
    data[key] = val
  })

  return {
    type: 'embed',
    id: data['1s'],
    latitude: +data['1d'],
    longitude: +data['2d'],
    heading: +data['3f'],
    pitch: +data['4f'],
    fov: +data['5f'],
    ms: +data['4v']
  }
}
