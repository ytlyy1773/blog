<c-title title="js获取电脑ip" />

## 示例

::: info 一、获取当前电脑内网ip
```js
function getLocalIp() {
  let needHost = ''
  try {
      // 获得网络接口列表
      let network = os.networkInterfaces()
      for (let dev in network) {
          let iface = network[dev]
          for (let i = 0; i < iface.length; i++) {
              let alias = iface[i]
              if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                  needHost = alias.address
              }
          }
      }
  } catch (e) {
      needHost = 'localhost'
  }
  return needHost
}
```
:::


::: info 二、获取电脑ip,根据ip映射域名
```js
1.内网开发网络图片(阿里云图片)需要使用域名才可以正常访问
2.映射关系可以放公司内部的服务器里边,可以多个项目使用
```
> 服务器文件内容`http://www.cs.com/file/ip.js`
```js
ipLocal = {
  '192.168.1.1' : 'zs.local.net', // 张三的电脑域名
  '192.168.1.2' : 'sl.local.net', // 李四的电脑域名
  '192.168.1.3' : 'ww.local.net' // 王五的电脑域名
}
```
:::

::: code-group
```js-vue [CommonJS]
// 支持require引入的项目使用`CommonJS`
// 新建domainName.js文件
const os = require('os')
const { execSync } = require('child_process')

function domainName() {
    let needHost = '' // 打开的host
    try {
        // 获得网络接口列表
        let network = os.networkInterfaces()
        for (let dev in network) {
            let iface = network[dev]
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i]
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    needHost = alias.address
                }
            }
        }
    } catch (e) {
        needHost = 'localhost'
    }
    try {
        const script = execSync('curl http://www.cs.com/file/ip.js').toString()
        const obj = eval(script)
        return obj[String(needHost)] || 'localhost'
    } catch (error) {
        return 'localhost'
    }
}

module.exports = {
  domainName
}

// ==== webpack.config.js ====
module.exports = {
  // ...
  devServer: {
    open: true,
    host: require('./domainName').domainName() // 替换掉'0.0.0.0'
  },
};
```

```js-vue [EsModule]
// 不支持require引入的项目使用`(EsModule)`
import os from 'os'
import { execSync } from 'child_process'

function domainName() {
    let needHost = '' // 打开的host
    try {
        // 获得网络接口列表
        let network = os.networkInterfaces()
        for (let dev in network) {
            let iface = network[dev]
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i]
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    needHost = alias.address
                }
            }
        }
    } catch (e) {
        needHost = 'localhost'
    }
    try {
        const script = execSync('curl http://www.cs.com/file/ip.js').toString()
        const fun = new Function(script + 'return ipLocalMapping')
        const obj = fun()
        return obj[String(needHost)] || 'localhost'
    } catch (error) {
        return 'localhost'
    }
}

export default domainName

// ==== vite.config.js ====
import domainName from './domainName'

export default defineConfig({
  // ...
  server: {
    host: domainName() // 替换掉'0.0.0.0'
  }
})
```
:::
