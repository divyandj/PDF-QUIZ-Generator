
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface AuthCardProps {
  isLogin?: boolean;
}

const AuthCard: React.FC<AuthCardProps> = ({ isLogin = false }) => {
  const [activeRole, setActiveRole] = useState<'teacher' | 'student'>('teacher');

  return (
    <div className="bg-white/5 backdrop-blur-md w-full max-w-md p-6 relative overflow-hidden mx-4 rounded-lg border border-white/10">
      {/* Card content */}
      <div className="relative z-10">
        {/* Role tabs */}
        <div className="flex mb-6 border-b border-white/10">
          <button
            className={`role-tab flex-1 py-2 text-sm font-medium ${activeRole === 'teacher' ? 'text-light-teal border-b-2 border-light-teal' : 'text-white/50'}`}
            onClick={() => setActiveRole('teacher')}
          >
            Teacher
          </button>
          <button
            className={`role-tab flex-1 py-2 text-sm font-medium ${activeRole === 'student' ? 'text-light-teal border-b-2 border-light-teal' : 'text-white/50'}`}
            onClick={() => setActiveRole('student')}
          >
            Student
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && (
            <div className="float-label-input">
              <input
                type="text"
                id="name"
                className="bg-white/5 w-full px-4 py-2 rounded border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-light-teal/50 transition-colors"
                placeholder="Full Name"
              />
            </div>
          )}

          <div className="float-label-input">
            <input
              type="email"
              id="email"
              className="bg-white/5 w-full px-4 py-2 rounded border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-light-teal/50 transition-colors"
              placeholder="Email Address"
            />
          </div>

          <div className="float-label-input">
            <input
              type="password"
              id="password"
              className="bg-white/5 w-full px-4 py-2 rounded border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-light-teal/50 transition-colors"
              placeholder="Password"
            />
          </div>

          {!isLogin && (
            <div className="float-label-input">
              <input
                type="password"
                id="confirmPassword"
                className="bg-white/5 w-full px-4 py-2 rounded border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-light-teal/50 transition-colors"
                placeholder="Confirm Password"
              />
            </div>
          )}

          {isLogin && (
            <div className="flex justify-end">
              <Link 
                to="/forgot-password" 
                className="text-white/50 text-sm hover:text-light-teal transition-colors"
              >
                Forgot Password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className={`w-full rounded-md p-2.5 mt-2 text-sm font-medium ${
              isLogin 
                ? 'bg-light-teal/10 text-light-teal hover:bg-light-teal/20' 
                : 'bg-light-teal text-white hover:bg-light-teal/90'
            } transition-colors flex items-center justify-center`}
          >
            <span className="flex items-center justify-center">
              {isLogin ? 'Sign In' : 'Create Account'}
              <ChevronRight size={16} className="ml-1" />
            </span>
          </button>
        </form>

        {/* Footer text */}
        <p className="text-white/50 text-sm mt-6 text-center">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-light-teal hover:text-white transition-colors"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-light-teal hover:text-white transition-colors"
              >
                Sign in
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthCard;
