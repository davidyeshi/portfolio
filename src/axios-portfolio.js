import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://portfolio-d9979.firebaseio.com/'
});

export default instance;