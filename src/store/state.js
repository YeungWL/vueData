/* 
  存放公共的变量仓库 -- 全局
*/
import * as cookie from 'utils/cookie'

const state = {
  token: cookie.get('TOKEN')
}

export default state
