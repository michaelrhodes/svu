var template = 'https://www.google.com/maps/@{latitude},{longitude},3a,{fov}y,{heading}h,{pitch}t/data=!3m4!1e1!3m2!1s{id}!2e0'

module.exports = stringify

function stringify (parsed) {
  return template
    .replace('{latitude}', parsed.latitude)
    .replace('{longitude}', parsed.longitude)
    .replace('{fov}', parsed.fov)
    .replace('{heading}', parsed.heading)
    .replace('{pitch}', parsed.pitch)
    .replace('{id}', parsed.id)
}
