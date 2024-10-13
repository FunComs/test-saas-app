import React from 'react';
import { SignUpButton } from '@clerk/clerk-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empower Your YouTube Channel with AI-Powered Tools
        </h1>
        <p className="text-xl mb-8">
          Streamline content creation, analytics, and engagement with one powerful platform.
        </p>
        <SignUpButton mode="modal">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </SignUpButton>
      </div>
    </section>
  );
};

export default HeroSection;