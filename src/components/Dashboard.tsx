import React from 'react';
import { useUser } from '@clerk/clerk-react';

const Dashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard, {user?.firstName}!</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Your YouTube Channel Stats</h2>
        <p className="text-gray-600">Connect your YouTube account to see your channel statistics and AI-powered insights.</p>
        {/* Add more dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;