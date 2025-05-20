import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "The Sustainable City Action Hub has transformed how we approach community engagement. It's made our initiatives more transparent and accessible to everyone.",
      author: "Sarah Johnson",
      role: "City Sustainability Officer",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      quote: "Being able to see all the green initiatives on a map and track their progress has really motivated me to get involved. I've participated in 5 events so far!",
      author: "Michael Chen",
      role: "Community Member",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "As a small environmental NGO, this platform has helped us coordinate with the city and reach more volunteers than ever before. The impact tracking is incredibly valuable.",
      author: "Aisha Williams",
      role: "Green Earth Foundation",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Voices from the Community
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Hear from the people and organizations making a difference through the Sustainable City Action Hub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-secondary-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary-200" />
              </div>
              <p className="text-secondary-700 flex-grow mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <p className="font-medium text-secondary-900">{testimonial.author}</p>
                  <p className="text-sm text-secondary-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;