import express from 'express';
import OptionController from './options.controller.js';

const optionsRouter= express.Router();
const optionController = new OptionController();

optionsRouter.post('/questions/:id/create',(req,res)=>{
    optionController.createOptions(req,res);
})
export default optionsRouter;