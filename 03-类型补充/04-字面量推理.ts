
type Method = 'POST' | 'GET'

const option = {
    url: 'http://12',
    method: 'POST'
} as const

// as const 后对象中属性就会变成readonly

function request(url: string, method: Method){
    console.log();
}

request(option.url, option.method)
