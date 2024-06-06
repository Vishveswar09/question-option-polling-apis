import OptionsRepository from "./options.repository.js";

export default class OptionController{
        constructor(){
          this.optionRepository = new OptionsRepository();
        }
        createOptions=async(req,res)=>{
           try{
            const id= req.params.id;
              const {text,vote}= req.body;
              const options=await this.optionRepository.createOptions(id,text,vote);
              return res.status(201).send(options);
           }catch(e){
            console.log(e);
           }
        }
}