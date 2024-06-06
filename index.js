import express from 'express';

import { mongooseConfig } from './config/db.config.js';
import  questionRouter  from './features/question/question.routes.js';
import optionsRouter from './features/options/options.routes.js';
import { votesRouter } from './features/votes/votes.routes.js';
const app= express();
app.use(express.json());
app.use('/api/questions',questionRouter);
app.use('/api/options',optionsRouter);
app.use('/api/votes',votesRouter);
app.listen(3000,()=>{
    console.log('Server is listening on 3000');
    mongooseConfig();
})