import request from '../../utils/http'
// 登录
export function Login(data) {
  return request({
    url:'/api/users/login',
    method:'post',
    data
  })
}
// 注册
export function Register(data) {
  return request({
    url:'/api/users/register',
    method:'post',
    data
  })
}