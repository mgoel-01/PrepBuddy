import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const MockInterview=()=>{
    const {user}=useAuth();
    const [details,setDetails]=useState({role:"",experience:"",difficulty:"",type:"",noq:""});
    const handleChange=(e)=>{
        setDetails({
            ...details,[e.target.name]:e.target.value
        });
    };
    const isComplete =
    details.role &&
    details.experience &&
    details.difficulty &&
    details.type &&
    details.noq;
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {role,experience,difficulty,type,noq}=details;
        if(!role ||!difficulty || !experience || !type || !noq){
            alert("Please fill all the fields");
            return;
        }
        try{
            const response=await fetch("http://localhost:5000/api/interview/start",{
                method: "POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify({role,experience,difficulty,type,noq,estimatedTime})
            });
             const data=await response.json();
             if(response.ok){
                setDetails({role:"",experience:"",difficulty:"",type:"",noq:""});
             }
             else{
                alert("Error");
                return;
             }
        }
        catch(error){
            alert(error.message);
            return;
        }
    }
    const estimatedTime = details.noq ? details.noq * 2 : 0;
    return(
        <div className="min-h-screen bg-gradient-to-br from-[#C1BFFF] via-[#E6D8FF] to-[#FDFBD4] py-4 px-8">
            <h1 className="text-3xl font-bold text-center">
                🎤 AI Mock Interview
            </h1>

            <p className="text-center text-gray-600 mt-2 mb-8">
                Configure your interview before you begin.
            </p>
            <div className="flex items-center justify-center ">
                <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl shadow-xl bg-white/80 p-8">
                    <div className="flex flex-row mb-4 gap-2">
                        <label className="w-44 font-medium" htmlFor="role">
                            Role:
                        </label>

                        <select
                            id="role"
                            name="role"
                            value={details.role}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CF6DFC] focus:border-[#CF6DFC]"
                        >
                            <option value="">Select Role</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                            <option value="Data Scientist">Data Scientist</option>
                        </select>
                    </div>
                    <div className="flex flex-row mb-4 gap-2">
                        <label className="w-44 font-medium" htmlFor="experience">
                            Experience:
                        </label>

                        <select
                            id="experience"
                            name="experience"
                            value={details.experience}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CF6DFC] focus:border-[#CF6DFC]"
                        >
                            <option value="">Select Experience</option>
                            <option value="Fresher">Fresher</option>
                            <option value="0-1 Years">0-1 Years</option>
                            <option value="1-3 Years">1-3 Years</option>
                            <option value="3-5 Years">3-5 Years</option>
                            <option value="5+ Years">5+ Years</option>
                        </select>
                    </div>
                    <div className="flex flex-row mb-4 gap-2">
                        <label className="w-44 font-medium" htmlFor="difficulty">
                            Difficulty:
                        </label>

                        <select
                            id="difficulty"
                            name="difficulty"
                            value={details.difficulty}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CF6DFC] focus:border-[#CF6DFC]"
                        >
                            <option value="">Select Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div className="flex flex-row mb-4 gap-2">
                        <label className="w-44 font-medium" htmlFor="type">
                            Interview Type:
                        </label>

                        <select
                            id="type"
                            name="type"
                            value={details.type}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CF6DFC] focus:border-[#CF6DFC]"
                        >
                            <option value="">Select Type</option>
                            <option value="Technical">Technical</option>
                            <option value="Behavioral">Behavioral</option>
                            <option value="HR">HR</option>
                            <option value="System Design">System Design</option>
                            <option value="Mixed">Mixed</option>
                        </select>
                    </div>
                    <div className="flex flex-row mb-4 gap-2">
                        <label className="w-44 font-medium" htmlFor="noq">
                            No. of Questions:
                        </label>

                        <select
                            id="noq"
                            name="noq"
                            value={details.noq}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CF6DFC] focus:border-[#CF6DFC]"
                        >
                            <option value="">Select Questions</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className="flex flex-row mb-4 gap-2">
                        <p className="text-gray-600">
                        Estimated Time: {estimatedTime} minutes
                        </p>
                    </div>
                    <button
                    disabled={!isComplete} 
                    className={`w-full text-white py-3 rounded-xl  ${isComplete?"bg-[#CF6DFC] hover:bg-purple-600 transition":"bg-gray-300 cursor-not-allowed"}`}
                    type="submit">Start Interview</button>
                </form>
            </div>
        </div>
    )
}

export default MockInterview;