import axios from "axios";
import {Message} from "element-ui";
axios.defaults.baseURL = 'http://localhost:8080/';


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
    let {status,message,data} = response.data;
    if (status == 20000){
        return data;
    }else {
        Message.error(message);
        return Promise.reject(false);
    }
}, function (error) {

    return Promise.reject(error);
});



export default axios;