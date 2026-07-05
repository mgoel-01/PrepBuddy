import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login=()=> {
    const [userData, setUserData] = useState({email:"",password:""});
    const handleSubmit=(e)=>{
        e.preventDefault();
        const {email,password}=userData;
        if (!email || !password) {
            alert("Please fill all fields.");
            return;
        }
        setUserData({
            email: "",
            password: "",
        });
    }
    const handleChange=(e)=>{
        setUserData({
            ...userData,[e.target.name]:e.target.value
        });
    }
    return(
        <div className='bg-gradient-to-br from-[#C1BFFF] via-[#E6D8FF] to-[#FDFBD4] min-h-screen flex items-center justify-center flex-col'>
            <div className='mb-8' >
                <h1 className="text-3xl font-bold text-center p-2">
                    Welcome Back
                </h1>

                <p className="text-center text-gray-600">
                    Login to continue your PrepBuddy journey.
                </p>
            </div>
            <div className='w-full max-w-md rounded-2xl shadow-xl  bg-white/80 backdrop-blur-md  p-8'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className=''>
                        <label className="block mb-1 font-medium" htmlFor="email">Email:</label>
                        <input required className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500" id="email" type="email" name="email" placeholder="Enter Email" value={userData.email} onChange={handleChange} />
                    </div>
                    <div className=''>
                        <label className="block mb-1 font-medium" htmlFor="password">Password:</label>
                        <input required className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500" id="password" type="password" name="password" placeholder="Enter Password" value={userData.password} onChange={handleChange} />
                    </div>
                    <button
                        type="submit"
                        className="w-full  text-white py-3 rounded-lg bg-[#CF6DFC] hover:bg-[#B95AE8] transition duration-200"
                    >
                        Login
                    </button>
                    <p className="text-center">
                        Don't have an account?
                        <Link to="/signup" className="text-violet-600 hover:underline font-medium">Signup</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;