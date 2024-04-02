import { message } from 'antd';
import axios from 'axios';

axios.interceptors.request.use(config => {
    if (config.method === 'get') {
        if (!config.params) {
            config.params = {};
        }
        config.params._t = Date.now();
    }
    return config;
});

// axios.interceptors.response.use(
//     response => {
//         const { code, msg } = response.data;
//         if (code !== 200 && code !== 0) {
//             message.error(`code：${msg}`);
//             return Promise.reject(msg);
//         }
//         return response.data; /*  */
//     },
//     error => {
//         console.log(error);
//         return Promise.reject(error);
//     },
// );
