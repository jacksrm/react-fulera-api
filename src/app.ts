import express from 'express';
import cors from 'cors';
import errors from './utils/errors'

import playlistInfoRoutes from '@routes/playlistInfoRoutes';
import songListInfoRoutes from '@routes/songListInfoRoutes';
import FAQDataRoutes from '@routes/FAQDataRoutes';
import registerRoutes from '@routes/registerRoutes';
import loginRoutes from '@routes/loginRoutes';
import profileRoutes from '@routes/profileRoutes';


const app = express();

app.use(cors());
app.use(express.static(__dirname + '/../public/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/playlists', playlistInfoRoutes);
app.use('/songs', songListInfoRoutes);
app.use('/FAQ', FAQDataRoutes);
app.use('/register', registerRoutes);
app.use('/profile', loginRoutes);
app.use('/profile', profileRoutes);

app.use(errors())

export default app;