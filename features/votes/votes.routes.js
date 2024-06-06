import express from 'express'
import VotesController from './votes.controller.js';

export const votesRouter = express.Router();
const votesController = new VotesController();

votesRouter.post('/options/:id/add_vote',(req,res)=>{
    votesController.addVote(req,res);
});