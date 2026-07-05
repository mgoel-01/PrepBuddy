import {
  Brain,
  FileText,
  Code2,
  BarChart3,
  Target,
  MessageSquare,
} from "lucide-react";
const features = [
  {
    icon: Brain,
    title: "AI Mock Interviews",
    description: "Practice realistic interviews with AI."
  },
  {
    icon: FileText,
    title: "Resume Analysis",
    description: "Receive AI-powered resume suggestions."
  },
  {
    icon: Code2,
    title: "Coding Practice",
    description: "Solve coding questions with explanations and track progress."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "View strengths, weaknesses, and improvement over time."
  },
  {
    icon: Target,
    title: "Personalized Roadmap",
    description: "Receive a custom preparation plan based on your goals."
  },
  {
    icon: MessageSquare,
    title: "Instant AI Feedback",
    description: "Get detailed feedback after every interview session."
  },
]  
const Features=()=>{
    return(
        <section id="features" className="bg-[#FDFBD4] py-24 px-20">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-5xl font-bold text-center">
                    Why Choose PrepBuddy?
                </h2>
            </div>
            <div>
                <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                    Everything you need to prepare for interviews,
                    from AI mock sessions to coding practice,
                    all in one platform.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16"> 
                {features.map((feature,idx)=>{
                    const Icon=feature.icon;
                    return(
                    <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 gap-2"> 
                        <Icon className="w-12 h-12 text-[#CF6DFC] mb-5"/>
                        <h3 className="text-2xl font-semibold mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}
export default Features;