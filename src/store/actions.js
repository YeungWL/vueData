import * as cookie from 'utils/cookie'
import * as types from './mutation-types'

// 登录
export const Login = ({ commit }, userInfo) => {
  return new Promise((resolve) => {
    if (userInfo.username === '111' && userInfo.password === '111') {
      commit(types.SET_TOKEN, 'qwertyui')
      cookie.set('TOKEN', 'qwertyui')
      resolve(1)
    } else {
      resolve(0)
    }
  })
}

// 登出
export const loginOut = ({ commit }) => {
  return new Promise(resolve => {
    commit(types.SET_TOKEN, '')
    cookie.remove('TOKEN')
    resolve()
  })
}
