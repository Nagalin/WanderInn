import axioslib from "axios";

const axios = axioslib.create({
    baseURL : 'http://localhost:8000',
    withCredentials : true //withCredentials for cookies
})
export default axios