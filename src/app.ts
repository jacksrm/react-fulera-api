import express, { Request, Response } from 'express';
import cors from 'cors';
import songData from '@data/songData.json';

const app = express();

app.use(cors());
app.use(express.static(__dirname + '/../public/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/songs',(req: Request, res: Response) => {
  return res.json(songData)
})

export default app;