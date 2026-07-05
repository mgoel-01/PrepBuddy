import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup=()=>{
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        college:"",
        year:"",
        branch:"",
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        const {
            name,
            email,
            password,
            confirmPassword,
            college,
            year,
            branch
        } = formData;
        if (
            !name ||
            !email ||
            !password ||
            !confirmPassword ||
            !college ||
            !year ||
            !branch
        ) {
            alert("Please fill all fields.");
            return;
            
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Enter a valid email.");
            return;
        } 
        if (password.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        console.log(formData);
        setFormData({
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
            college:"",
            year:"",
            branch:"",
        });
    }
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});

    }
    return ( 
        <div className='bg-gradient-to-br from-[#C1BFFF] via-[#E6D8FF] to-[#FDFBD4] min-h-screen flex items-center justify-center flex-col'>
            <div className='mb-8' >
                <h1 className="text-3xl font-bold text-center p-2">
                    Create Account
                </h1>

                <p className="text-center text-gray-600">
                    Join PrepBuddy and start preparing smarter.
                </p>
            </div>
            <div className='w-full max-w-md rounded-2xl shadow-xl  bg-white/80 backdrop-blur-md  p-8'>
                <form onSubmit={handleSubmit} className='space-y-4' >
                    <div className=''>
                        <label className="block mb-1 font-medium" htmlFor="name">Full Name:</label>
                        <input className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CF6DFC]" id="name" type="text" name="name" placeholder="Enter Full Name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className=''>
                        <label className="block mb-1 font-medium" htmlFor="email">Email:</label>
                        <input className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CF6DFC]" id="email" type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
                    </div>
                    
                    
                    <div className=''>
                        <label className="block mb-1 font-medium" htmlFor="password">Password:</label>
                        <input className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CF6DFC]" id="password" type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                    </div>
                    <div className=''>
                        <label className="block mb-1 font-medium" htmlFor="confirmPassword">Condirm Password:</label>
                        <input className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CF6DFC]" id="confirmPassword" type="password" name="confirmPassword" placeholder="Enter Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                    </div>
                    <div className=''>
                        <label className="block mb-1 font-medium" htmlFor="college">College:</label>
                        <input className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CF6DFC]" id="college" type="text" name="college" placeholder="Enter College Name" value={formData.college} onChange={handleChange} />
                    </div>
                    <div className=''>
                        <label className="block mb-1 font-medium" htmlFor="year">Year:</label>
                        <input className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CF6DFC]" id="year" type="text" name="year" placeholder="Enter Year" value={formData.year} onChange={handleChange} />
                    </div>
                    <div className=''>
                        <label className="block mb-1 font-medium" htmlFor="branch">Branch</label>
                        <input className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CF6DFC]" id="branch" type="text" name="branch" placeholder="Enter Branch Name" value={formData.branch} onChange={handleChange} />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white py-3 rounded-lg bg-[#CF6DFC] hover:bg-[#B95AE8] transition duration-200"
                    >
                        Create Account
                    </button>
                    <p className="text-center">
                        Already have an account?
                        <Link to="/login" className="text-violet-600 hover:underline font-medium"> Login</Link>
                    </p>
                </form>
                
            </div>
        </div>
     );
}

export default Signup;