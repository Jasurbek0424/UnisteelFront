// api.ts
import axios from 'axios';

export const VITE_API_URL = import.meta.env.VITE_API_URL;

export interface Product {
    id: number;
    title: string;
    gost: string;
    category: string;
    country: string;
    size: string;
    content: string;
    get_photo: string;
}


export interface Information {
    id: number;
    address: string;
    number1?: string;
    number2?: string;
    number3?: string;
    email?: string;
}
export interface ServisesProps {
    id: number;
    title: string;
    content: string;
    image: string;
    infoPreTitle?: string;
    infoTitle?: string;
    infoText: string;
}

export async function fetchProducts() {
    try {
        const response = await axios.get(`${VITE_API_URL}/Products`);
        return response.data;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        return null;
    }
}

export async function fetchInformation(): Promise<Information | null> {
    try {
        const response = await axios.get<Information[]>(`${VITE_API_URL}/information/`);
        return response.data[0] || null;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        return null;
    }
}


export async function fetchServises(): Promise<ServisesProps[] | null> {
    try {
        const response = await axios.get<ServisesProps[]>(`${VITE_API_URL}/servises/`);
        return response.data || null;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        return null;
    }
}


export async function sendFormData(formData: FormData): Promise<boolean> {
    try {
        const formDataToSend = new FormData();
        formDataToSend.append('full_name', formData.get('full_name') || '');
        formDataToSend.append('contact', formData.get('contact') || '');
        formDataToSend.append('comment', formData.get('comment') || '');

        const response = await axios.post(`${VITE_API_URL}/contacts/`, formDataToSend);
        if (response.status === 201) {
            return true;
        } else {
            console.error('Ошибка при отправке данных на бекенд');
            return false;
        }
    } catch (error) {
        console.error('Ошибка при отправке данных на бекенд:', error);
        return false;
    }
}


export async function sendContactFormData(formData: FormData): Promise<boolean> {
    try {
        const contact = formData.get('contact') || '';

        const formDataToSend = new FormData();
        formDataToSend.append('contact', contact);

        const response = await axios.post(`${VITE_API_URL}/contacts/`, formDataToSend);
        if (response.status === 201) {
            return true;
        } else {
            console.error('Ошибка при отправке данных на бекенд');
            return false;
        }
    } catch (error) {
        console.error('Ошибка при отправке данных на бекенд:', error);
        return false;
    }
}

