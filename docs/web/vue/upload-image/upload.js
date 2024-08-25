import { message } from 'ant-design-vue'

export const IMAGE_TYPE = ['jpg', 'jpeg', 'png', 'gif']
export const typeMes = '.jpg、.jpeg、.png、.gif'

// 全局引入,二次封装，只限于上传图片
export function uploadImage() {
    return new Promise((resolve, reject) => {
        uploadWhole({
            multiple: true,
            accept: 'image/*',
            typeArr: IMAGE_TYPE
        })
            .then(fileList => {
                if (judgeImage(fileList, IMAGE_TYPE)) {
                    // 临时本地回显，后续调用阿里云对接第三方上传
                    resolve(fileList)
                } else {
                    message.info(`上传文件类型需满足${typeMes}`)
                    reject(`上传文件类型需满足${typeMes}`)
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}

// 核心：上传功能
export function uploadWhole(options = {}) {
    return new Promise((resolve, reject) => {
        const config = {
            accept: '*', // 接受的文件类型
            typeArr: [], // 接受的文件类型，格式列表
            multiple: false, // 是否多选
            size: 10240, // 文件大小限制，单位是kb
            limit: 5, // 可选文件个数限制
            ...options
        }
        const input = document.createElement('input')
        input.type = 'file'
        input.multiple = config.multiple
        input.accept = config.accept
        input.style.width = '0'
        input.style.height = '0'
        document.body.appendChild(input)
        input.click()
        input.oninput = e => {
            // 必须做一次拷贝
            const list = [...e.target.files]
            check(list, config)
                .then(() => {
                    resolve(list)
                })
                .catch(err => {
                    message.error(err)
                    reject(err)
                })
        }
        window.addEventListener(
            'focus',
            () => {
                setTimeout(() => {
                    if (!input.value) {
                        document.body.removeChild(input)
                        reject('用户取消上传')
                    }
                }, 500)
            },
            { once: true }
        )
    })
}

// 判断是不是图片
function judgeImage(file, typeList = []) {
    // file：要判断的文件，typeList：非必需，上传文件类型数组
    const list = Array.from(file)
    let arr = []
    list.forEach(ele => {
        arr.push(filterImage(ele))
    })
    const fileList = arr.filter(ele => {
        return typeList.includes(ele)
    })
    const ifT = arr.length === fileList.length ? true : false
    return ifT
}

// 获取文件类型
export function filterImage(item) {
    return item.name.split('.')[item.name.split('.').length - 1]?.toLowerCase()
}

// 校验
function check(list, config) {
    return new Promise((resolve, reject) => {
        // 长度校验
        if (list.length > config.limit) {
            return reject(`上传数量超过${config.limit}个`)
        }
        // accept校验...
        // size校验...
        resolve('校验通过')
    })
}