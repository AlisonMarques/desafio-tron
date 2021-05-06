import axios from 'axios';

const api = axios.create({
   baseURL: 'com.desafiotron:/oauthredirect',
});

export default api;
