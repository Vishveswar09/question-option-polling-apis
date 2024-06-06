import VotesRepository from "./votes.repository.js";

export default class VotesController{
    constructor(){
     this.votesRepository= new VotesRepository();
    }

    addVote=async(req,res)=>{
         try{
            const id= req.params.id;
            const opt=await this.votesRepository.addVote(id);
            return res.status(200).send(opt);
         }catch(e){
            console.log(e);
         }
    }
}