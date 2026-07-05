import vite from '../assets/vite.svg';
import { useNavigate } from "react-router-dom";
const Navbar=()=>{
    const navigate=useNavigate();
    return(
        <div className='bg-[#CF6DFC] text-white shadow-md flex justify-between px-8 py-4'>
            <div className='flex flex-row items-center gap-4'>
                <img src={vite} alt="PrepBuddy" className='w-12 h-12 bg-black'/>
                <h1 className='text-3xl font-bold italic text-blue-600'>Hello User</h1>
            </div>
            <div className='flex flex-row gap-8 items-end'>
                <div>
                    <button onClick={()=>navigate("/login")} className='text-white cursor-pointer hover:text-blue-400 transition-colors duration-200'>Login</button>
                </div>
                <div>
                    <button onClick={()=>navigate("/signup")} className='text-white cursor-pointer hover:text-blue-400 transition-colors duration-200'>SignUp</button>
                </div>
                <div>
                    <button onClick={()=>navigate("/")} className='text-white cursor-pointer hover:text-blue-400 transition-colors duration-200'>Home</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;