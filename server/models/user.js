import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim:true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password:{
            type: String,
            required: true,
        },
        college:{
            type: String,
            required: true,
        },
        year:{
            type: String,
            required: true,
        },
        branch:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
export default mongoose.model("User",userSchema);