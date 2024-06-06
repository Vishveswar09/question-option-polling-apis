import { deleteModel } from "mongoose";
import QuestionRepository from "./question.repository.js";

export default class QuestionController{
    constructor(){
       this.questionRepository= new QuestionRepository();
    }

    createQuestion= async(req,res)=>{
        try{
            const {title}= req.body;
            const que=await this.questionRepository.createQuestion(title);
            return res.status(201).send(que);
        }catch(e){
            console.log(e);
        }
    }
    getQuestion= async (req,res)=>{
        try{
           const {id}=req.params;
           const question = await this.questionRepository.getQuestion(id);
           if(!question){
             return res.status(400).send('Question cant be deleted');
           }
           return res.status(200).json({success:true, deletedQuestion:question});
        }catch(e){
            console.log(e);
        }
    }
    deleteQuestion= async (req,res)=>{
        try{
           const {id}=req.params;
           const isDeleted = await this.questionRepository.deleteQuestion(id);
           return res.status(200).send(isDeleted);
        }catch(e){
            console.log(e);
        }
    }
}