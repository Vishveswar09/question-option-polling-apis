import mongoose from "mongoose";
import { questionSchema } from "./question.schema.js";

export const questionModel= mongoose.model('Questions',questionSchema);
export default class QuestionRepository{
    constructor(){}

    async createQuestion(title){
        try{
            const question = new questionModel({title});
            return await question.save();
        }catch(e){
            console.log(e);
        }
    }
    async getQuestion(id){
        try{
           const question = await questionModel.findById(id).populate('options');;
           return question;
        }catch(e){
            console.log(e);
        }
    }
    async deleteQuestion(id){
        try{
            const question= await questionModel.findById(id);
            // question.options.forEach(async (option)=>{
            //     if(option.votes>0){
            //         await questionModel.deleteOne(id);
            //     }else{
            //         return;
            //     }
            // })
            if (!question || question.options.some(option => option.votes > 0)) {
                return null; // Question not found or has options with votes
              }
              await questionModel.deleteOne({_id:id});
            return question;
        }catch(e){
            console.log(e);
        }
    }
}