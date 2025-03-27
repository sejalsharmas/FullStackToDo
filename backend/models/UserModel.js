import {Schema,model} from "mongoose"

const userSchema = new Schema({
     userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    myTodos:[{
        type:Schema.Types.ObjectId,
        ref:"Todo"
    }]
},{timestamps:true});

const User = model("User",userSchema)

export default User

