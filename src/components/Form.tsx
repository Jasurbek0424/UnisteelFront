import React, { useState } from 'react';
import { sendFormData } from '../api/api';
import { sendEmail } from '../api/email';

interface FormValues {
    full_name: string;
    contact: string;
    comment: string;
}

interface FormProps {
    onSubmitSuccess: () => void;
}

const FormComponent: React.FC<FormProps> = ({ onSubmitSuccess }) => {
    const [formData, setFormData] = useState<FormValues>({
        full_name: '',
        contact: '',
        comment: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'contact') {
            if (/^[0-9+]*$/.test(value) || value === '') {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const contactRegex = /^\+?\d+$/;
        if (!contactRegex.test(formData.contact)) {
            alert('Пожалуйста, введите корректный контактный номер.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('full_name', formData.full_name);
        formDataToSend.append('contact', formData.contact);
        formDataToSend.append('comment', formData.comment);

        // Отправка данных на бэкэнд
        const backendSuccess = await sendFormData(formDataToSend);

        // Отправка данных на почту
        const emailSuccess = await sendEmail(formData);

        if (backendSuccess && emailSuccess) {
            setFormData({
                full_name: '',
                contact: '',
                comment: ''
            });
            onSubmitSuccess();
        }
    };

    return (
        <form onSubmit={handleSubmit} className='font-libre700 font-bold text-secondary'>
            <div className="mb-4">
                <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    autoComplete='name'
                    value={formData.full_name}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 w-full"
                    placeholder='Ваше имя'
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    autoComplete='contact'
                    value={formData.contact}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 w-full"
                    placeholder='Контактный номер'
                    required
                />
            </div>
            <div className="mb-4">
                <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 w-full"
                    placeholder='Комментарий'
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-primary w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Отправить
            </button>
        </form>
    );
};

export default FormComponent;
