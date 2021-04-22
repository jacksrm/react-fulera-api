import express, { Request, Response } from 'express';
import getFAQData from 'src/utils/getFAQData';

const route = express.Router();

route.get('/', async (req: Request, res: Response) => {
  const faq = await getFAQData();
  return res.json(faq);
});

export default route;
