import Cookies from 'js-cookie'
import { Base64 } from 'js-base64'

export function set (key, cookie) {
  return Cookies.set(key, cookie)
}

export function get (key) {
  return Cookies.get(key)
}

export function remove (key) {
  return Cookies.remove(key)
}

// base64编码
export function encrypt (value) {
  return Base64.encode(value)
}

// base64解码
export function decode (value) {
  return Base64.decode(value)
}
