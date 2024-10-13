import React from 'react';
import { Link } from 'react-router-dom';
import { UserButton, SignInButton, useUser } from '@clerk/clerk-react';
import { Youtube } from 'lucide-react';

const Header: React.FC = () => {
  const { isSignedIn, user } = useUser();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Youtube className="h-8 w-8 text-red-600" />
          <span className="text-xl font-bold">YT AI Tools</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
            <li><Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
            <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
            {isSignedIn && (
              <li><Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link></li>
            )}
            <li>
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <SignInButton mode="modal">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;