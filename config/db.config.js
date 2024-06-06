import mongoose from "mongoose";
import mongodb from 'mongodb';

export const mongooseConfig= async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/Polling');
        console.log('mongoose connected');
    }catch(e){
        console.log(e);
    }
}