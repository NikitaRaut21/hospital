import {model,Schema} from 'mongoose';
const appoinmentSchema=new Schema ({
 user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
},
 doctor:{
        type:Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
},
 appointmentReason:{
    type:String,
    default:"Regular Checkup"
 },
 appointmentDate:{
    type:Date,
    default:Date.now
},
appointmentType:{
    type:String,
    default:["First visit","follow UP-1","follow UP-2","follow UP-3","RoutineCheckup"],
},
status:{
    type:String,
    enum:['pending','Inprogress','Completed','Cancelled']
},
completedAt:{
    type:Date
},
cancelledAt:{
    type:Date
},
note:{
    type:String
}
},{
    timestamps:true,
})
export default  model('Appointment',appointmentSchema);