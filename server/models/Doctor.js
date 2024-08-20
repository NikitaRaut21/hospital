import { model,Schema } from "mongoose";
const doctorSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    speaciality:{
        type:String,
    },
    opdTiming:{
        type:String,
    }
},{
    timestamps:true
})

export default model ("Doctor",doctorSchema);