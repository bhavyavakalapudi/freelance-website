import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const Contact = () => {
  return <div>
    <div>
        <Navbar/>
    </div>
    <div className="bg-gray-300 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <h3 className="text-center text-2xl m-10">Alex</h3>
        <h2 className="text-center text-2xl m-10">Freelancer</h2>
        <h2 className="text-center m-10">With a strong command of design tools like Adobe Creative Suite, they specialize in branding,
                web design, and marketing materials. Now looking to showcase their work, this designer is eager to present a portfolio that highlights
                their ability to blend aesthetics with functionality, demonstrating their expertise in visual storytelling and their growth within the design field.
            </h2>
        <h2 className="text-center m-10">+91 **********</h2>
        <h2 className="text-center m-10">alex@gmail.com</h2>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">Follow us on social media:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        
      </div>
      <Footer/>
  </div>
}

export default Contact;
