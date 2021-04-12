import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Testing node/typescript API! ' })
})

app.listen(3333); 