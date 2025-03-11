import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const testimonials = [
  {
    id: 1,
    text: "Working with this team was an absolute pleasure. Their attention to detail and creative approach helped bring our vision to life.",
    name: "John Doe",
    profession: "CEO, Example Company"
  },
  {
    id: 2,
    text: "The project was executed flawlessly, and the design exceeded our expectations. Highly recommended for any branding needs.",
    name: "Jane Smith",
    profession: "Marketing Manager, Creative Solutions"
  },
  {
    id: 3,
    text: "A truly talented team that understands our brand. Their work made a significant impact on our company's presence.",
    name: "Mark Johnson",
    profession: "Founder, Innovate Tech"
  },
];

export const Testimonials = () => {
  return <div>
    <div>
        <Navbar/>
    </div>
    <div className="bg-green-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Client Testimonials</h2>
        
        
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex justify-center">
              <div className="w-full max-w-lg bg-white p-6 mb-4 rounded-xl shadow-lg">
                <div className="relative p-4 bg-blue-50 rounded-xl mb-4">
                  <p className="text-gray-600 text-lg italic">"{testimonial.text}"</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.profession}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    <Footer/>
  </div>
}