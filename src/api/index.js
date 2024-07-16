import request from '@/utils/request'
export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data: data
  })
}
export function login(params) {
  return request({
    url: '/login',
    method: 'get',
    params
  })
}