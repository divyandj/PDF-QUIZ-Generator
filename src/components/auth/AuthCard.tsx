
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface AuthCardProps {
  isLogin?: boolean;
}

const AuthCard: React.FC<AuthCardProps> = ({ isLogin = false }) => {
  const [activeRole, setActiveRole] = useState<'teacher' | 'student'>('teacher');

  return (
    <div className="glass-card w-full max-w-md p-8 relative overflow-hidden mx-4">
      {/* Animated border glow effect */}
      <div className="absolute inset-0 rounded-2xl border border-white/30 before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-light-teal before:to-neon-pink before:animate-pulse-glow"></div>

      {/* Card content */}
      <div className="relative z-10">
        {/* Role tabs */}
        <div className="flex mb-8 border-b border-white/20">
          <button
            className={`role-tab flex-1 ${activeRole === 'teacher' ? 'active' : ''}`}
            onClick={() => setActiveRole('teacher')}
          >
            Teacher
          </button>
          <button
            className={`role-tab flex-1 ${activeRole === 'student' ? 'active' : ''}`}
            onClick={() => setActiveRole('student')}
          >
            Student
          </button>
        </div>

        {/* Card title */}
        <h2 className="text-2xl font-medium text-white mb-6">
          {isLogin ? 'Welcome Back' : 'Create Your Account'}
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && (
            <div className="float-label-input">
              <input
                type="text"
                id="name"
                className="input-glow w-full"
                placeholder=" "
              />
              <label htmlFor="name">Full Name</label>
            </div>
          )}

          <div className="float-label-input">
            <input
              type="email"
              id="email"
              className="input-glow w-full"
              placeholder=" "
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="float-label-input">
            <input
              type="password"
              id="password"
              className="input-glow w-full"
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
          </div>

          {!isLogin && (
            <div className="float-label-input">
              <input
                type="password"
                id="confirmPassword"
                className="input-glow w-full"
                placeholder=" "
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
          )}

          {isLogin && (
            <div className="flex justify-end">
              <Link 
                to="/forgot-password" 
                className="text-light-teal text-sm hover:text-white transition-colors"
              >
                Forgot Password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className={`w-full rounded-xl p-3 mt-2 font-medium overflow-hidden relative group ${
              isLogin 
                ? 'border-2 border-neon-pink text-white hover:bg-neon-pink/10' 
                : 'bg-gradient-primary text-white'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors">
              {isLogin ? 'Log In' : 'Sign Up'}
              <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-gradient-to-r from-neon-pink to-light-teal z-0"></span>
          </button>
        </form>

        {/* Footer text */}
        <p className="text-white/70 text-sm mt-6 text-center">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-light-teal hover:text-white transition-colors relative after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-light-teal after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-light-teal hover:text-white transition-colors relative after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-light-teal after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Log in
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthCard;
