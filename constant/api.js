import axios from 'axios'
import { url_api } from './index'
const instance = axios.create({
    baseURL: `${url_api}`,
    headers: {
        'Content-Type': 'application/json',
    },
});
instance.interceptors.request.use(
    (config) => {
        let user = localStorage.getItem('user');
        if (user !== undefined && user !== 'undefined') {
            user = JSON.parse(user);
        }
        if (user && user.token) {
            config.headers['Authorization'] = `Bearer ${user.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if (originalConfig.url !== '/auth/login' && err.response) {
            // Access Token was expired
            const user = JSON.parse(localStorage.getItem('user'));
            if (err.response.status === 401 && user && !originalConfig._retry) {
                originalConfig._retry = true;
                if (user.refreshToken && user.accessToken) {
                    try {
                        const rs = await instance.post('/auth/refreshtoken', {
                            refreshToken: user.refreshToken,
                        });

                        const tokenResponse = rs.data;
                        localStorage.setItem('user', JSON.stringify(tokenResponse));

                        return instance(originalConfig);
                    } catch (_error) {
                        if (404 === _error?.response?.status) {
                            // If 404 on refreshtoken remove user from localstorage
                            localStorage.removeItem('user');
                        }
                        return Promise.reject(_error);
                    }
                } else {
                    return Promise.reject(err);
                }
            }
        }
        return Promise.reject(err);
    },
);

export default instance;