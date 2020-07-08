import axios from 'axios';
import qs from 'qs'
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = 'https://www.baidu.com';}
// else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = 'https://www.ceshi.com';
// }
// else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'https://www.production.com';
// }

axios.defaults.baseURL='/'
axios.defaults.timeout = 1000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export function get(url, params) {

    return new Promise((resolve, reject) => {

        axios.get(url, {

            params: params

        }).then(res => {

            resolve(res.data);

        }).catch(err => {

            reject(err.data)

        })

    });

}

export function post(url, params) {

    return new Promise((resolve, reject) => {

        axios.post(url, qs.stringify(params))

            .then(res => {

                resolve(res.data);

            })

            .catch(err => {

                reject(err.data)

            })

    });

}

