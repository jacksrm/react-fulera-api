import express from 'express';
import cors from 'cors';

import playlistInfoRoutes from '@routes/playlistInfoRoutes';
import songListInfoRoutes from '@routes/songListInfoRoutes';
import FAQDataRoutes from '@routes/FAQDataRoutes';

const app = express();

app.use(cors());
app.use(express.static(__dirname + '/../public/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/playlists', playlistInfoRoutes);
app.use('/songs', songListInfoRoutes);
app.use('/FAQ', FAQDataRoutes);


export default app;