import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Clerk Publishable Key");
}

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route 
                path="/sign-up/*"
                element={<SignUpPage />}
              />
              <Route 
                path="/sign-in/*"
                element={<SignInPage />}
              />
              <Route
                path="/dashboard"
                element={
                  <>
                    <SignedIn>
                      <Dashboard />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/sign-in" />
                    </SignedOut>
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <SignedIn>
                      <ProfilePage />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/sign-in" />
                    </SignedOut>
                  </>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;