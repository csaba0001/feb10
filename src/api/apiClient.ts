import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3002/"
})

export default apiClient;