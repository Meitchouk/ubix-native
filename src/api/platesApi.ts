import apiClient from './apiClient';
import { get } from 'ubix-source';

export const fetchPlates = async () => {
    const response = await apiClient.get('/plates');
    return response.data;
};

export const fetchPlateDetails = async (plateId: string) => {
    const response = await apiClient.get(`/plates/${plateId}`);
    return response.data;
};

export const addPlate = async (plate: { plateNumber: string; ownerName: string }) => {
    const response = await apiClient.post('/plates', plate);
    return response.data;
};

export const deletePlate = async (plateId: string) => {
    const response = await apiClient.delete(`/plates/${plateId}`);
    return response.data;
};


export const getTrafficTickets = async (licensePlate: string) => {
    return get(licensePlate);
}