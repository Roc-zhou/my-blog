import axios from 'axios'
import router from '../../../router'

// 创建一个axios实例
const instance = axios.create({
  baseURL: '/sys',
  timeout: 10000,
  headers: {
    // name: 'demo'
  },
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    // 在这里可以做加密处理
    return data;
  }],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    // 在这里可以做解密处理
    return data;
  }],
});
instance.defaults.headers.post['Content-Type'] = 'application/json';
// 添加请求拦截器
instance.interceptors.request.use((config) => {
  if (config.method == 'get' || config.method == 'delete') {
    config.params = {
      ...config.params,
      timestamp: (new Date()).valueOf() /*解决IE - GET请求缓存问题*/
    }
  }
  return config
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // TODO
  const ResponseHeaders = response.config.headers,
    data = JSON.parse(response.data),
    sendResponse = {
      sendData: response.config.data,
      sendURL: response.config.url
    }
  _output({
    title: response.config.url,
    content: {
      ResponseHeaders,
      data,
      sendResponse
    },
  })
  if (data.code === 200) return data.body
  else if (data.code === 301) {
    //TODO 重定向等...
    router.push('/')
    return Promise.reject(data)
  } else {
    return Promise.reject(data)
  }
}, (err) => {
  // 对响应错误做点什么
  let message = ''
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        message = '错误请求'
        break;
      case 401:
        message = '未授权，请重新登录'
        break;
      case 403:
        message = '拒绝访问'
        break;
      case 404:
        message = '请求错误,未找到该资源'
        break;
      case 405:
        message = '请求方法未允许'
        break;
      case 408:
        message = '请求超时'
        break;
      case 500:
        message = '服务器端出错'
        break;
      case 501:
        message = '网络未实现'
        break;
      case 502:
        message = '网络错误'
        break;
      case 503:
        message = '服务不可用'
        break;
      case 504:
        message = '网络超时'
        break;
      case 505:
        message = 'http版本不支持该请求'
        break;
      default:
        message = `连接错误${error.response.status}`
    }
  } else {
    message = "连接到 服务器 失败"
  }
  alert(message)
  return Promise.reject(message);
});

//线下输出线上关闭
const _output = e => {
  const Debug = !!~location.origin.indexOf('http://localhost:') || !!~location.origin.indexOf('http://192.168.') || !!~location.origin.indexOf('http://127.0.0.1:') || !!~location.origin.indexOf('http://0.0.0.0:')
  return Debug && console.log(`%ctitle：${e.title}\n%cfrom：${document.title}\n%cdata：%o`, 'color:#cc7832;border-bottom:1px solid #57a3f3', 'color:#6a7c4e;border-bottom:1px solid #f7f7f7', 'color:#d24f4d', e.content)
}
/**
 *
 * get 请求
 * @param {*} url
 * @param {*} params
 */
export const $api = (url, params) => {
  return new Promise((res, rej) => {
    instance.get(url, { params: params })
      .then(data => {
        res(data)
      })
      .catch(err => {
        rej(err)
      });
  })
}
/**
 *
 * post 请求
 * @param {*} url
 * @param {*} params
 */
export const $http = (url, params) => {
  return new Promise((res, rej) => {
    instance.post(url, params)
      .then(data => {
        res(data)
      })
      .catch(error => {
        rej(error)
      });
  })
}

/**
 *
 * delet 请求
 * @param {*} url
 * @param {*} params
 */
export const $delete = (url, params) => {
  return new Promise((res, rej) => {
    instance.post(url, {
      params: params
    })
      .then(data => {
        res(data)
      })
      .catch(error => {
        rej(error)
      });
  })
}

