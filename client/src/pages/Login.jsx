import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const Login=()=> {
    const [userData, setUserData] = useState({email:"",password:""});
    const navigate=useNavigate();
    const [loading, setLoading] = useState(false);
    const {login}=useAuth();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {email,password}=userData;
        if (!email || !password) {
            alert("Please fill all fields.");
            return;
        }
        try{
            setLoading(true);
            const response=await fetch("http://localhost:5000/api/auth/login",{
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify({email,password})
            });
            const data=await response.json();
            if(response.ok){
                login(data.user, data.token);
                setUserData({
                    email: "",
                    password: "",
                });
                navigate("/dashboard");
            }
            else{
                alert(data.message);
            }
        }
        catch(error){
            console.log(error);
            alert("Something went wrong. Please try again.");
        }
        finally{
            setLoading(false);
        }
        
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
                        disabled={loading}
                        className="w-full  text-white py-3 rounded-lg bg-[#CF6DFC] hover:bg-[#B95AE8] transition duration-200"
                    >
                        {loading ? "Logging in..." : "Login"}
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