import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

interface FormValues {
    full_name: string;
    contact: string;
    comment: string;
}

export async function sendEmail(formData: FormValues): Promise<boolean> {
    try {
        const templateParams: Record<string, string> = {
            full_name: formData.full_name,
            contact: formData.contact,
            comment: formData.comment
        };

        const serviceId: string = 'service_u559z1o'; // Замените на ваш Service ID
        const templateId: string = 'template_sw5gkh5'; // Замените на ID вашего шаблона
        const userId: string = 'Mk30CILdKGZvvp45O'; // Замените на ваш User ID

        const response: EmailJSResponseStatus = await emailjs.send(serviceId, templateId, templateParams, userId);
        if (response.status === 200) {
            return true;
        } else {
            console.error('Ошибка при отправке почты:', response);
            return false;
        }
    } catch (error) {
        console.error('Ошибка при отправке почты:', error);
        return false;
    }
}
