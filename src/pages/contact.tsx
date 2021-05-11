import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ContactFormSchemaType, {
  contactFormSchema
} from '../types/contact-form';
import FormControl from '../components/ui/FormControl';
import Label from '../components/ui/Label';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import Notification, { NotificationProps } from '../components/ui/Notification';

const ContactPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormSchemaType>({
    resolver: yupResolver(contactFormSchema)
  });

  const [notification, setNotification] =
    useState<NotificationProps | undefined>(undefined);

  const onSubmit = handleSubmit(async ({ email, name, message }) => {
    setNotification({ message: 'Sending message...' });
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email, name, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json().then(({ message }) => {
            setNotification({ severity: 'success', message });
          });
        }
        if (response.status === 500) {
          throw new Error('Something went wrong!');
        }
        return response.json().then(data => {
          throw new Error(data.message || 'Something went wrong!');
        });
      })
      .catch(error => {
        setNotification({ severity: 'error', message: error.message });
      })
      .finally(() => {
        reset();
      });
  });

  return (
    <>
      <Head>
        <title>John&#39;s Blog - Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <section className="my-8 mx-auto rounded-md bg-gray-100 w-11/12 max-w-3xl p-4 shadow text-2xl">
        <h1 className="text-3xl my-4 mx-0 text-left md:text-center md:text-6xl">
          How can I help you?
        </h1>
        <form onSubmit={onSubmit}>
          <div className="flex flex-wrap gap-4">
            <FormControl className="flex-1 min-w-10">
              <Label htmlFor="email">Your Email</Label>
              <Input type="email" id="email" {...register('email')} />
              {errors.email && (
                <p className="text-red-500 text-base">{errors.email.message}</p>
              )}
            </FormControl>
            <FormControl className="flex-1 min-w-10">
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" id="name" {...register('name')} />
              {errors.name && (
                <p className="text-red-500 text-base">{errors.name.message}</p>
              )}
            </FormControl>
          </div>
          <FormControl className="flex-1 min-w-10">
            <Label htmlFor="message">Your Message</Label>
            <Textarea id="message" rows={5} {...register('message')} />
            {errors.message && (
              <p className="text-red-500 text-base">{errors.message.message}</p>
            )}
          </FormControl>
          <div className="mt-4 text-right">
            <Button severity="primary" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </section>
      {notification && <Notification {...notification} />}
    </>
  );
};

export default ContactPage;
