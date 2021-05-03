// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ name: 'Nextjs Blog' });
};

export default handler;
