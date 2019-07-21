/**
 * ajax请求函数模块
 * 返回值：promise对象(异步返回的是response.data)
 */
import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {

  return new Promise(function (resolve, reject) {
    let promise

    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        url += '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    } else {
      //发送post请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
