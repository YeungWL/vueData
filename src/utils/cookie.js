import Cookies from 'js-cookie'

export function set (key, cookie) {
  return Cookies.set(key, cookie)
}

export function get (key) {
  return Cookies.get(key)
}

export function remove (key) {
  return Cookies.remove(key)
}
