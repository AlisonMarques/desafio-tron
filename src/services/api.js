import axios from 'axios';

const accessToken =
   'BQCymHOzx2Oure73iuQDT8-vU2OGftkex02nD9foi6lRjzD3PD4z2f5u4W-BWsPqlE8SJtwur9I-Ndd4E4eFRQelHvWxZFdbrmliRCKSfnli1IZ2Smo8NfeNF1GYx6xWHao12GwCoyUBoiI3jXDcnvTEvYg';

const api = axios.create({
   baseURL: 'https://api.spotify.com/v1/',
});

export default api;
