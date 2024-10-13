import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/dashboard"
        appearance={{
          elements: {
            rootBox: 'mx-auto w-full max-w-md p-6 bg-white rounded-lg shadow-md',
            card: 'p-0',
            header: 'text-2xl font-bold mb-4 text-center',
            socialButtonsBlockButton: 'w-full',
          },
        }}
      />
    </div>
  );
};

export default SignUpPage;