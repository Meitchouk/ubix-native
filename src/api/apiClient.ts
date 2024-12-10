import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Cambia esto por la URL base de tu API
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
