import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home=()=> {
    return(
        <div className='bg-[#1c1c1c]'>
            <Navbar/>
            <Hero/>
            <Features/>
            <HowItWorks/>
            <Testimonials/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Home;