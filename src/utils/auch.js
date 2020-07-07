import Cookie from 'js-cookie'
// 存储token
export function setToken(name,val) {
  return sessionStorage.setItem(name,val)
}
// 获取token
export function getToken(val) {
  return sessionStorage.getItem(val);
}

// 删除token
export function removeToken(name) {
  return sessionStorage.removeItem(name);
}