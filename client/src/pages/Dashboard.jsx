import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Dashboard=()=>{
    const navigate= useNavigate();
    const {user}= useAuth();
    useEffect(()=>{
        const token=localStorage.getItem("token");
        if(!token){
            navigate("/login");
            return;
        }
        if(!user)return;
    },[navigate]);
    return(
        <div>
            <section className="bg-[#FDFBD4] py-4 px-2">
                <div className="items-center">
                    <h1 className="text-2xl text-center">Your Progress</h1>
                </div>
                <div className="grid grid-cols-4 gap-8 m-4">

                    <div className="bg-white rounded-2xl shadow-lg p-8 gap-2">
                        <p>Mock Interviews Completed</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 gap-2">
                        <p>Coding Problems Solved</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 gap-2">
                        <p>Resume Score</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 gap-2">
                        <p>Current Streak</p>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-br from-[#C1BFFF] via-[#E6D8FF] to-[#FDFBD4] py-4 px-8">
                <div>
                    <h2 className="text-3xl font-bold text-center mb-8">Start Preparing</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div onClick={()=>navigate("/dashboard/mock-interview")} className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 gap-2">
                        <h1 className="text-xl font-semibold mb-3">🎤 AI Mock Interview</h1>
                        <p>Practice real interview questions with AI and get instant feedback on your answers.</p>
                    </div>
                    <div onClick={()=>navigate("/dashboard/code-practice")} className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 gap-2">
                        <h1 className="text-xl font-semibold mb-3">💻 Coding Practice</h1>
                        <p>Solve coding problems with explanations and improve your problem-solving skills.</p>
                    </div>
                    <div onClick={()=>navigate("/dashboard/resume-analyzer")} className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 gap-2">
                        <h1 className="text-xl font-semibold mb-3">📄 Resume Analyzer</h1>
                        <p>Upload your resume and receive AI-powered suggestions to make it recruiter-ready.</p>
                    </div>
                    <div onClick={()=>navigate("/dashboard/performance-analytics")} className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 gap-2">
                        <h1 className="text-xl font-semibold mb-3">📊 Performance Analytics</h1>
                        <p>Track your progress with detailed insights, scores, and improvement trends.</p>
                    </div>
                    <div onClick={()=>navigate("/dashboard/personalized-roadmap")} className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 gap-2">
                        <h1 className="text-xl font-semibold mb-3">🎯 Personalized Roadmap</h1>
                        <p>Get a customized learning plan based on your strengths, weaknesses, and career goals.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard;