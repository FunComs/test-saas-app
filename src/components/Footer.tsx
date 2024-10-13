import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Facebook, Twitter, Instagram } from 'lucide-react';
import { SignUpButton } from '@clerk/clerk-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Youtube className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold">YT AI Tools</span>
            </Link>
            <p className="mt-2">Empower your YouTube channel with AI-powered tools.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="hover:text-gray-300">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-gray-300">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-300"><Facebook /></a>
              <a href="#" className="hover:text-gray-300"><Twitter /></a>
              <a href="#" className="hover:text-gray-300"><Instagram /></a>
            </div>
            <div className="mt-4">
              <SignUpButton mode="modal">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 YT AI Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;