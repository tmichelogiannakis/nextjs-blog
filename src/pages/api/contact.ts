// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { ValidationError } from 'yup';
import { contactFormSchema } from '../../types/contact-form';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    try {
      await contactFormSchema.validate(req.body, {
        abortEarly: false,
        strict: true,
        stripUnknown: true
      });
    } catch (error) {
      // if error is a yup validation eror return 422 else throw the error
      if (error instanceof ValidationError) {
        return res.status(422).json({
          message: 'Unprocessable Entity',
          errors: error.errors
        });
      } else {
        return res.status(500).json({ message: `Something went wrong.` });
      }
    }

    // const { email, name, message } = req.body;
    // todo: store to database

    res.status(201).json({ message: 'Successfully stored message!' });
  }
};

export default handler;
