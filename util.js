const util = {}

util.getPathname = (url) => {
  const u = new URL(url)
  return u.pathname
}
util.stripHTML = (html) => {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent || div.innerText || ''
}
export default util
