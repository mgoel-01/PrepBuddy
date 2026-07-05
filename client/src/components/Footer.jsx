import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from "react-router-dom"
const Footer=()=>{
    return(
        <footer className="bg-[#CF6DFC] text-white py-16 px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-4 gap-10">
                    <div>
                        <h2 className="text-3xl font-bold">
                            PrepBuddy
                        </h2>

                        <p className="mt-4 text-white/80 leading-relaxed">
                            AI-powered interview preparation platform helping
                            students crack their dream jobs.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <Link to="\" className="hover:text-[#FDFBD4] cursor-pointer ">Home</Link>
                            <br />
                            <Link className="hover:text-[#FDFBD4] cursor-pointer">Features</Link>
                            <br />
                            <Link className="hover:text-[#FDFBD4] cursor-pointer">FAQ</Link>
                            <br />
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Resources
                        </h3>

                        <ul className="space-y-3">
                            <li className="hover:text-[#FDFBD4] cursor-pointer">
                                Privacy Policy
                            </li>

                            <li className="hover:text-[#FDFBD4] cursor-pointer">
                                Terms & Conditions
                            </li>

                            <li className="hover:text-[#FDFBD4] cursor-pointer">
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Connect
                        </h3>

                        <div className="flex gap-5">
                            <FaGithub className="text-2xl cursor-pointer hover:text-[#FDFBD4] transition-colors" />
                            <FaLinkedin className="text-2xl cursor-pointer hover:text-[#FDFBD4] transition-colors" />
                            <MdEmail className="text-2xl cursor-pointer hover:text-[#FDFBD4] transition-colors" />
                        </div>
                    </div>
                    </div>
                    <div>
                        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/70 ">
                            © 2026 PrepBuddy. All rights reserved.
                        </div>
                    </div>
                </div>
        </footer>
    )
}
export default Footer;