const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineering Intern",
    review:
      "PrepBuddy helped me improve my interview confidence and land my first internship."
  },
  {
    name: "Priya Mehta",
    role: "Final Year Student",
    review:
      "The AI feedback pointed out mistakes I never noticed before."
  },
  {
    name: "Aman Gupta",
    role: "Frontend Developer",
    review:
      "The coding practice and mock interviews made placements much easier."
  }
];



const Testimonials=()=>{
    return(
        <section id="testimonials" className="bg-[#FDFBD4] py-24 px-20">
            <div>
                <h2 className="text-5xl font-bold text-center">
                    What Our Users Say
                </h2>

                <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                    Hear from learners who improved their interview skills with PrepBuddy.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-10 mt-20">
            {testimonials.map((testimonial, idx) => (
                <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                <div className="text-yellow-400 text-2xl mb-5">
                    ⭐⭐⭐⭐⭐
                </div>

                <p className="text-gray-600 italic leading-relaxed mb-8">
                    "{testimonial.review}"
                </p>

                <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                    {testimonial.role}
                    </p>
                </div>
                </div>
            ))}
            </div>
                </section>
            )
        }
export default Testimonials;