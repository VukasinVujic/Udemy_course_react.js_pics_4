import axios from 'axios';


export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID g7BII5uIP7Ke83-h4wvLn_66BGoGW-vqAzqa0l_RSA4'
    }
})