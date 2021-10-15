import axios from "axios";

const instance = axios.create({
 baseURL: 'https://us-central1-clone-f59fd.cloudfunctions.net/api'
 // 'http://localhost:5001/clone-f59fd/us-central1/api' //The API (Cloud function) URL
});

export default instance;