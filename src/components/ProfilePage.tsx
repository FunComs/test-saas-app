import React from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';

const ProfilePage: React.FC = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img src={user?.profileImageUrl} alt={user?.fullName || 'Profile'} className="w-20 h-20 rounded-full mr-4" />
          <div>
            <h2 className="text-2xl font-semibold">{user?.fullName}</h2>
            <p className="text-gray-600">{user?.primaryEmailAddress?.emailAddress}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Connected Accounts</h3>
        <div className="space-y-4">
          {user?.externalAccounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between">
              <span>{account.provider.charAt(0).toUpperCase() + account.provider.slice(1)}</span>
              <button className="text-red-600 hover:text-red-800">Unlink</button>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;