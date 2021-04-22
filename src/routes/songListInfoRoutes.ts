import express, { Request, Response } from 'express';
import getSongListData from 'src/utils/getSongListData';

const route = express.Router();

route.get('/', async (req: Request, res: Response) => {
  const lists = await getSongListData();
  return res.json(lists);
});

route.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const lists = await getSongListData();
  const list = lists.filter((l) => l.playlistId === id)[0];
  return res.json(list.songList);
});

export default route;
