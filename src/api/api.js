import axios from 'axios';


 const api = axios.create({
    baseURL : "http://localhost:8080",
    headers : {
        "Content-Type":"aplication/json",
        "Accept":"aplication/json"
    },
    timeout:10000,
    transformRequest:[
        function(data){
            return JSON.stringify(data);
        }
    ]

})
export default api;