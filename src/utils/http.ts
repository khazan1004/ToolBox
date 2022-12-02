import axios from 'axios'

const post = () => {
    axios.create({
        baseURL: '',
        timeout: 10000
    })
}
export default {
    post
}