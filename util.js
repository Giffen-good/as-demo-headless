const util = {}

util.getLocation = (href) => {
  const l = document.createElement('a')
  l.href = href
  return l
}

util.getPathname = (url) => {
  return util.getLocation(url).pathname
}
util.stripHTML = (html) => {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent || div.innerText || ''
}
export default util
