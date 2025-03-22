
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ParticleBackground from '../components/ui/ParticleBackground';
import AuthCard from '../components/auth/AuthCard';

const Signup: React.FC = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-deep-blue text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center py-20 px-4 relative">
        {/* Animated background elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-light-teal/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="w-full max-w-md z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
            <p className="text-white/70">
              Join thousands of educators and students
            </p>
          </div>
          
          <AuthCard isLogin={false} />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Signup;
