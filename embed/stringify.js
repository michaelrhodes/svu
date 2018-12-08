var template = 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s{id}!2m2!1d{latitude}!2d{longitude}!3f{heading}!4f{pitch}!5f{fov}'

module.exports = stringify

function stringify (parsed) {
  if (parsed.type === 'share') {
    parsed.pitch -= 90
    parsed.fov = 1.5
  }

  return template
    .replace('{id}', parsed.id)
    .replace('{latitude}', parsed.latitude)
    .replace('{longitude}', parsed.longitude)
    .replace('{heading}', parsed.heading)
    .replace('{pitch}', parsed.pitch)
    .replace('{fov}', parsed.fov)
}
