import api from '../constant/api'

const login = (email: string, password: string) => {
    api.post('users/login', {email, password})
    .then(res => {
        console.log(res);
        localStorage.setItem('user', res.data);
    })
    .catch(err => {
        console.log(err);
        
    })
}

const register = (data) => {
    api.post('users/register', data)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
        
    })
}

export {
    login,
    register
}