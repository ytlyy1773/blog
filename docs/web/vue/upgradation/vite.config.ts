import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'
const path = require('path')
import legacy from '@vitejs/plugin-legacy'

export default defineConfig(({ mode }) => {
    const configFile = require(`./config/${mode}.env.js`)
    const defineMap = {}
    // 解决vite不兼容process.env
    Object.keys(configFile).forEach(key => {
        defineMap[`process.env.${key}`] = JSON.stringify(configFile[key])
    })
    return {
        build: {
            target: 'es2015'
        },
        plugins: [
            vue(),
            vueJsx(), // 兼容jsx语法
            createSvgSpritePlugin({
                symbolId: 'icon-[name]'
            }), // 兼容svg图片
            legacy({
                targets: ['chrome >= 65', 'edge >= 79', 'safari >= 11.1', 'firefox >= 67'],
                ignoreBrowserslistConfig: true,
                renderLegacyChunks: false,
                additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
                modernPolyfills: true
            }) // 兼容部分老旧浏览器
        ],
        server: {
            host: '0.0.0.0',
            port: 9700,
            open: false, //自动打开
            proxy: {
                '/web': {
                    target: 'http://www.dev.com', // 开发环境
                    // target: 'http://www.test.com', // 测试环境
                    changeOrigin: true
                }
            }
        },
        define: defineMap,
        esbuild: {
            pure: ['console.log'],
            drop: ['debugger'],
            target: 'es2015'
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            },
            extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
        }
    }
})
