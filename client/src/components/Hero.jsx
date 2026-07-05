import hero from "../assets/hero.png";
import {useNavigate} from "react-router-dom";
const Hero=()=>{
    const navigate=useNavigate();
    return(
        <section id="hero" className=" min-h-screen items-center flex px-20 bg-gradient-to-br from-[#C1BFFF] via-[#E6D8FF] to-[#FDFBD4]">
            <div className="w-1/2">
                <div>
                    <h1 className="text-6xl font-bold leading-tight">
                        Ace Every Interview <br />
                        with{" "}
                        <span className="text-[#CF6DFC]">AI-Powered Preparation</span>
                    </h1>
                </div>
                <div>
                    <p className="text-xl mt-6 mb-8 text-gray-700 max-w-xl">
                        Practice mock interviews, solve coding questions,
                        improve your resume, and receive AI feedback—
                        all in one platform.
                    </p>
                </div>
                <div className="flex gap-5  mt-4">
                    <button onClick={()=>{navigate("/signup")}} className="bg-[#CF6DFC] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#BB55F4] hover:scale-105 transition-all duration-300" >Get Started</button>
                    <button className="border-2 border-[#CF6DFC] text-[#CF6DFC] px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-[#CF6DFC] hover:text-white transition-all duration-300">Watch Demo</button>
                </div>
            </div>
            <div className="w-1/2">
                <div className="flex justify-center">
                    <img src={hero} alt="Hero" className="w-[550px] drop-shadow-2xl" />
                </div>
            </div>
        </section>
    )
}

export default Hero;