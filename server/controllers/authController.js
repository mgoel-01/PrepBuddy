import User from "../models/user.js";
import bcrypt from "bcrypt.js";
import jwt from "jsonwebtoken";
export const signup=async(req,res)=>{
    try{
        const {name,email,password,college,year,branch}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exist"});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            name,email,password: hashedPassword,college,year,branch,
        }); 
        const token=jwt.sign(
            {id:user_id},process.env.JWT_SECRET,{expiresIn:"7d"}
        );
        res.status(201).json({
            message: "Signup successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                college: user.college,
                year: user.year,
                branch: user.branch,
            },
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error",
        });
    }
};

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body();
        const user=User.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:"User did not exist"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({success:false,message:"Invalid Credentials"});
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.status(200).json({
            success:true,
            message:"Login Successful",
            token,
            user:{
                id: user._id,
                name: user.name,
                email: user.email,
                college: user.college,
                year: user.year,
                branch: user.branch,
            },
        });
    }
    catch(error){
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}