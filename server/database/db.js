
import mongoose from "mongoose";

const Connection = async ()=>{
    const URL=`mongodb://127.0.0.1:27017/Blog-app`
    try{
        await mongoose.connect(URL,{ useNewUrlParser:true});
        console.log('database is connected');
    }catch(error){
        console.log('error occour',error);
    }
}
export default Connection;