import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3333/api/v1',
    timeout: 5000
})

export default api