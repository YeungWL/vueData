import * as cookie from 'utils/cookie'
import * as types from './mutation-types'

// 登录
export const login = ({ commit }, userInfo) => {
  return new Promise((resolve) => {
    if (userInfo.username === '111' && userInfo.password === '111') {
      commit(types.SET_TOKEN, cookie.encrypt('qwertyui'))
      cookie.set('TOKEN', cookie.encrypt('qwertyui'))
      resolve(1)
    } else {
      resolve(0)
    }
  })
}

// 登出 - 退出登录
export const loginOut = ({ commit }) => {
  return new Promise(resolve => {
    commit(types.SET_TOKEN, '')
    cookie.remove('TOKEN')
    resolve()
  })
}
