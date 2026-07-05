import { UserPlus, Brain, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Account",
    description: "Sign up and set your interview goals."
  },
  {
    icon: Brain,
    title: "Practice with AI",
    description: "Take mock interviews and solve coding challenges."
  },
  {
    icon: Trophy,
    title: "Improve & Get Hired",
    description: "Receive AI feedback and track your progress."
  }
];


const HowItWorks=()=>{
    return(
        <section id="howItWorks" className="bg-white py-24 px-20">
            <div className="max-w-3xl mx-auto">

                <h2 className="text-5xl font-bold text-center">
                    How It Works
                </h2>
            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                Three simple steps to start your interview preparation journey.
            </p>
            </div>
            <div className="grid grid-cols-3 gap-10 mt-20">
                {steps.map((step,idx)=>{
                    const Icon=step.icon;
                    return(
                    <div key={idx} className="h-full group flex flex-col items-center text-center bg-white border border-gray-100 rounded-2xl shadow-lg p-8 hover:scale-105 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 gap-2"> 
                        <div className="w-10 h-10 rounded-full bg-[#CF6DFC] text-white flex items-center justify-center font-bold mb-6 transition-transform duration-300 group-hover:scale-110 self-center">
                            {idx + 1}
                        </div>
                        <Icon className="w-14 h-14 text-[#CF6DFC] mb-6"/>
                        <h3 className="text-2xl font-semibold mb-3">
                            {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}
export default HowItWorks;