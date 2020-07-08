import { get, post} from './http'


/**登录*/
export function  login(url,data) {
   return  post(url,data)
}
/**退出*/
export function exit(url,data) {
 return  get(url,data)
}
/**列表*/
export function loadList(url,data) {

    return post(url,data)
}