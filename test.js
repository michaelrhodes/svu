var assert = require('assert')
var parse = require('./parse')

parse('https://goo.gl/maps/HYP6ugFMy9N2', function (err, parsed) {
  assert.equal(err, null)
  assert.equal(typeof parsed, 'object')
  assert.equal(parsed.type, 'share')
  assert.equal(typeof parsed.id, 'string')
  assert.equal(typeof parsed.latitude, 'number')
  assert.equal(typeof parsed.longitude, 'number')
  assert.equal(typeof parsed.heading, 'number')
  assert.equal(typeof parsed.pitch, 'number')
  assert.equal(typeof parsed.fov, 'number')
})
