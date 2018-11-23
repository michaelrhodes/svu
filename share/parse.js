var pattern = require('./pattern')

module.exports = parse

function parse (url) {
  var match = url.match(pattern)
  if (!match) return null

  var data = {}

  match[1].split(',').forEach(function (val, i) {
    if (i === 0) return data.latitude = val
    if (i === 1) return data.longitude = val

    var key = val[val.length - 1]
    val = val.substr(0, val.length - 1)
    if (key === 'h') return data.heading = val
    if (key === 't') return data.pitch = val
    if (key === 'y') return data.fov = val
  })

  match[2].split('!').forEach(function (kv) {
    var key = kv.substr(0, 2)
    var val = kv.substr(2)
    data[key] = val
  })

  return {
    type: 'share',
    id: data['1s'],
    latitude: +data.latitude,
    longitude: +data.longitude,
    heading: +data.heading,
    pitch: +data.pitch,
    fov: +data.fov
  }
}
