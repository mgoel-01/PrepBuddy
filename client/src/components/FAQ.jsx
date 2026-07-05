import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


const faqs = [
  {
    question: "Is PrepBuddy free to use?",
    answer:
      "Yes. You can start with our free plan and upgrade later for premium features.",
  },
  {
    question: "Can I practice coding interviews?",
    answer:
      "Absolutely! PrepBuddy provides coding challenges along with AI-powered feedback.",
  },
  {
    question: "How does AI feedback work?",
    answer:
      "Our AI analyzes your responses, communication, and technical performance to provide personalized suggestions.",
  },
  {
    question: "Can I upload my resume?",
    answer:
      "Yes. PrepBuddy analyzes your resume and suggests improvements to increase your chances of getting shortlisted.",
  },
  {
    question: "Which companies can I prepare for?",
    answer:
      "You can prepare for interviews at startups, product-based companies, service-based companies, and more.",
  },
];
const FAQ=()=>{
    const [openIndex, setOpenIndex] = useState(null);
    const handleClick = (idx) => {
        if (openIndex === idx) {
        setOpenIndex(null);
        } else {
        setOpenIndex(idx);
        }
    };

    return(
        <section id="faq" className="bg-white py-24 px-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold text-center">
                    Frequently Asked Questions
                </h2>

                <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                    Got questions? We've got answers.
                </p>
            </div>
            <div className="max-w-4xl mx-auto mt-16 space-y-5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(idx)}
              className={`groupborder rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                openIndex === idx
                  ? "border-[#CF6DFC] shadow-lg"
                  : "border-gray-200 hover:shadow-md"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold group-hover:text-[#CF6DFC] transition-colors duration-300">
                  {faq.question}
                </h3>

                {openIndex === idx ? (
                  <ChevronUp className="text-[#CF6DFC]" />
                ) : (
                  <ChevronDown className="text-[#CF6DFC]" />
                )}
              </div>

              {openIndex === idx && (
                <p className="mt-5 text-gray-600 leading-relaxed transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        </section>
    )
}
export default FAQ;