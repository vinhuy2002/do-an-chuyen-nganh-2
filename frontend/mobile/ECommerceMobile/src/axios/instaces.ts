import axios from "axios";

const instance = axios.create({
    baseURL: 'http://10.50.5.172:3000/api',
});

export default instance;