import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CommunityTestimonial = () => {
  const testimonials = [
    {
      quote: "Thanks to Trillioni Chad, my kids are in school, and I've started my own food stall. They didn't just help — they believed in me.",
      author: "Fatimé",
      role: "Community Beneficiary",
      location: "N'Djamena",
      initials: "F",
      bgColor: "bg-blue-500"
    },
    {
      quote: "The youth football program has given our children hope and discipline. We see them growing into confident leaders.",
      author: "Abdoulaye",
      role: "Community Leader",
      location: "Farcha",
      initials: "A",
      bgColor: "bg-green-500"
    },
    {
      quote: "The clinic support has been life-changing for our village. Basic healthcare is no longer a luxury but a reality.",
      author: "Aisha",
      role: "Local Nurse",
      location: "Rural Chad",
      initials: "A",
      bgColor: "bg-purple-500"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
            Voices from Our Community
          </h2>
        </div>

        <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mb-8">
              {/* Avatar with initials */}
              <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white ${testimonials[currentTestimonial].bgColor}`}>
                {testimonials[currentTestimonial].initials}
              </div>
              <blockquote className="font-dm-sans text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="font-poppins">
                <p className="font-semibold text-primary text-lg">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CommunityTestimonial;