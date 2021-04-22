import express, { Request, Response } from 'express';
import getPlaylistsData from 'src/utils/getPlaylistsData';

const route = express.Router();

route.get('/', async (req: Request, res: Response) => {
  const lists = await getPlaylistsData();
  return res.json(lists);
});

route.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const lists = await getPlaylistsData();
  const list = lists.filter((l) => l.id === id)[0];
  return res.json(list);
});

export default route;
