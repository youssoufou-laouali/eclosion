import api from '../constant/api'

const getTags = () => {
    return api.get('tags')
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err);
    })
}


export {
    getTags,
}