import mongoose from "mongoose";
import { optionSchema } from "./options.schema.js";
import { questionModel } from "../question/question.repository.js";
export const optionsModel= mongoose.model('Options',optionSchema);
export default class OptionsRepository{
    constructor(){}

    async createOptions(id,text,vote){
        try{
           const option = new optionsModel({text,vote});
           let savedOptions=await option.save();
           savedOptions.link_to_vote = `http://localhost:3000/api/votes/options/${savedOptions._id}/add_vote`;
           savedOptions=await option.save();
           const question= await questionModel.findByIdAndUpdate(
            { _id: id },
            { $push: { options: savedOptions._id } },
            { new: true, runValidators: true, populate: 'options' }
          );
        return await question.save();
        }catch(e){
            console.log(e);
        }
    }
}