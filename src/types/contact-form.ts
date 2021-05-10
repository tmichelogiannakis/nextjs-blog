import { object, string, InferType } from 'yup';

export const contactFormSchema = object({
  email: string().email('Invalid email').required('Email is required'),
  name: string().required('Name is required'),
  message: string().required('Message is required')
});

type ContactFormSchemaType = InferType<typeof contactFormSchema>;

export default ContactFormSchemaType;
