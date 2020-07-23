import HttpClient from '../http'

export function GetData(param) {
    return HttpClient.get(`/api`, {param})
}
export default {
    GetData
}
// ————————————————
// 版权声明：本文为CSDN博主「litter吴」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/litter940505/article/details/102851707