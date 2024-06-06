import express from 'express';
import QuestionController from './question.controller.js';

const questionRouter= express.Router();

const questionController = new QuestionController();

questionRouter.post('/create',(req,res)=>{
    questionController.createQuestion(req,res);
})

questionRouter.get('/:id',(req,res)=>{
    questionController.getQuestion(req,res);
})

questionRouter.delete('/:id/delete',(req,res)=>{
    questionController.deleteQuestion(req,res);
})

export default questionRouter;