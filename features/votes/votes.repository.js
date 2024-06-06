import { optionsModel } from "../options/options.repository.js";

export default class votesRepository{
    constructor(){

    }
    async addVote(id){
        const updatedOption = await optionsModel.findByIdAndUpdate(
            id,
            { $inc: { votes: 1 } }, // Increment vote by 1
            { new: true } // Return the updated document
          );
      
          return updatedOption;
    }
}