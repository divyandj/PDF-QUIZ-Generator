import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileUp,
  BookOpen,
  FilePlus,
  Calendar,
  Bell,
  BarChart4,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Plus,
  Search,
  Filter,
  MoreVertical,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import PdfUpload from '../components/student/PdfUpload';

const StudentDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="min-h-screen bg-deep-blue text-white flex">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-deep-blue to-deep-blue/95 transition-all duration-300 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <Link to="/" className="text-white font-semibold text-xl">
            <span className="bg-gradient-to-r from-white to-light-teal bg-clip-text text-transparent">MCQ Generator</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-white/70 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-4">
          <div className="mb-6">
            <h3 className="text-white/50 uppercase text-xs font-medium mb-2 px-3">Main</h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setActiveMenu('dashboard')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeMenu === 'dashboard'
                      ? 'bg-white/10 text-light-teal'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <BookOpen size={18} />
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveMenu('uploadPdf')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeMenu === 'uploadPdf'
                      ? 'bg-white/10 text-light-teal'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <FileUp size={18} />
                  <span>Upload PDF</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveMenu('takeTest')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeMenu === 'takeTest'
                      ? 'bg-white/10 text-light-teal'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Calendar size={18} />
                  <span>Take Test</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveMenu('results')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeMenu === 'results'
                      ? 'bg-white/10 text-light-teal'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <BarChart4 size={18} />
                  <span>Results</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveMenu('notifications')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeMenu === 'notifications'
                      ? 'bg-white/10 text-light-teal'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Bell size={18} />
                  <span>Notifications</span>
                  <span className="ml-auto bg-neon-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/50 uppercase text-xs font-medium mb-2 px-3">Settings</h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setActiveMenu('settings')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeMenu === 'settings'
                      ? 'bg-white/10 text-light-teal'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
              </li>
              <li>
                <Link
                  to="/login"
                  className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-white/70 hover:bg-white/5 hover:text-white"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <header className="bg-deep-blue/90 backdrop-blur-md sticky top-0 z-40 border-b border-white/10 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="mr-4 text-white/70 hover:text-white md:hidden"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-medium">
                {activeMenu === 'dashboard' && 'Dashboard'}
                {activeMenu === 'uploadPdf' && 'Upload PDF'}
                {activeMenu === 'takeTest' && 'Take Test'}
                {activeMenu === 'results' && 'Results'}
                {activeMenu === 'notifications' && 'Notifications'}
                {activeMenu === 'settings' && 'Settings'}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                  <Search size={16} />
                </button>
              </div>
              <div className="relative">
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                  <Bell size={16} />
                </button>
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-neon-pink"></span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-light-teal to-deep-blue">
                  <img
                    src="https://i.pravatar.cc/100?img=4"
                    alt="User"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="hidden md:block text-sm font-medium">Jane Smith</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 md:p-6">
          {activeMenu === 'dashboard' && (
            <div className="animate-fade-in">
              {/* Greeting Section */}
              <div className="glass-card p-6 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Welcome back, <span className="text-light-teal">Jane</span>!
                    </h2>
                    <p className="text-white/70">
                      You have 2 upcoming tests scheduled for this week.
                    </p>
                  </div>
                  <button className="btn-primary mt-4 md:mt-0">
                    <span className="flex items-center">
                      Take a Test
                      <ChevronRight size={16} className="ml-1" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="glass-card p-6 hover:translate-y-[-5px] transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/70 text-sm mb-1">Tests Completed</p>
                      <h3 className="text-3xl font-bold">12</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-light-teal/20 to-light-teal/10 flex items-center justify-center">
                      <CheckCircle size={20} className="text-light-teal" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-green-400 text-sm flex items-center">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      2 this week
                    </span>
                  </div>
                </div>

                <div className="glass-card p-6 hover:translate-y-[-5px] transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/70 text-sm mb-1">Average Score</p>
                      <h3 className="text-3xl font-bold">85%</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-pink/20 to-neon-pink/10 flex items-center justify-center">
                      <BarChart4 size={20} className="text-neon-pink" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-light-teal to-neon-pink h-1.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 hover:translate-y-[-5px] transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/70 text-sm mb-1">Coming Up</p>
                      <h3 className="text-3xl font-bold">2</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-light-teal/20 to-deep-blue/20 flex items-center justify-center">
                      <Clock size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-white/70 text-sm">Physics test in 2 days</span>
                  </div>
                </div>
              </div>

              {/* Upcoming Tests */}
              <div className="glass-card p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Upcoming Tests</h3>
                  <button className="text-white/70 hover:text-white text-sm flex items-center">
                    View All
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium mb-1">Physics Mid-term</h4>
                        <p className="text-white/70 text-sm">30 multiple-choice questions • 45 minutes</p>
                      </div>
                      <span className="bg-light-teal/20 text-light-teal px-2 py-1 rounded text-xs flex items-center">
                        <Clock size={12} className="mr-1" />
                        2 days remaining
                      </span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-white/50 text-sm">Available: Aug 15, 2023 • 10:00 AM</span>
                      <button className="btn-primary text-sm py-2 px-4">
                        Take Now
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium mb-1">Chemistry Quiz</h4>
                        <p className="text-white/70 text-sm">15 multiple-choice questions • 20 minutes</p>
                      </div>
                      <span className="bg-neon-pink/20 text-neon-pink px-2 py-1 rounded text-xs flex items-center">
                        <Clock size={12} className="mr-1" />
                        5 days remaining
                      </span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-white/50 text-sm">Available: Aug 18, 2023 • 2:00 PM</span>
                      <button className="text-white/30 cursor-not-allowed bg-white/5 text-sm py-2 px-4 rounded-lg">
                        Not Available Yet
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Results */}
              <div className="glass-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Recent Results</h3>
                  <button className="text-white/70 hover:text-white text-sm flex items-center">
                    View All
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/70 text-sm font-medium">
                          Test Name
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 text-sm font-medium">
                          Date
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 text-sm font-medium">
                          Score
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 text-sm font-medium">
                          Grade
                        </th>
                        <th className="text-right py-3 px-4 text-white/70 text-sm font-medium">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span>Biology Quiz</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-white/70">Aug 10, 2023</td>
                        <td className="py-3 px-4">90%</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                            A
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button className="text-light-teal hover:text-white transition-colors text-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span>Chemistry Test</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-white/70">Aug 5, 2023</td>
                        <td className="py-3 px-4">75%</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                            B
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button className="text-light-teal hover:text-white transition-colors text-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span>Physics Quiz</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-white/70">Jul 28, 2023</td>
                        <td className="py-3 px-4">82%</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                            B
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button className="text-light-teal hover:text-white transition-colors text-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'uploadPdf' && <PdfUpload />}

          {activeMenu === 'takeTest' && (
            <div className="animate-fade-in">
              <div className="glass-card p-6 mb-6">
                <h2 className="text-xl font-medium mb-4">Available Tests</h2>
                <p className="text-white/70 mb-6">
                  Here are the tests available for you to take. Make sure to check the time limit and instructions before starting.
                </p>

                {/* Tests List */}
                <div className="space-y-4">
                  <div className="glass-card hover:translate-y-[-5px] transition-all duration-300">
                    <div className="p-4 border-b border-white/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium mb-1">Physics Mid-term</h3>
                          <p className="text-white/70 text-sm">30 multiple-choice questions • 45 minutes</p>
                        </div>
                        <span className="bg-light-teal/20 text-light-teal px-2 py-1 rounded text-xs flex items-center">
                          <Clock size={12} className="mr-1" />
                          2 days remaining
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <p className="text-white/70 text-sm mb-1">Subject: Physics</p>
                          <p className="text-white/70 text-sm">Teacher: Mr. Johnson</p>
                        </div>
                        <button className="btn-primary">
                          Take Test
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card hover:translate-y-[-5px] transition-all duration-300">
                    <div className="p-4 border-b border-white/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium mb-1">Chemistry Quiz</h3>
                          <p className="text-white/70 text-sm">15 multiple-choice questions • 20 minutes</p>
                        </div>
                        <span className="bg-neon-pink/20 text-neon-pink px-2 py-1 rounded text-xs flex items-center">
                          <Clock size={12} className="mr-1" />
                          5 days remaining
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <p className="text-white/70 text-sm mb-1">Subject: Chemistry</p>
                          <p className="text-white/70 text-sm">Teacher: Ms. Anderson</p>
                        </div>
                        <button className="text-white/30 cursor-not-allowed bg-white/5 py-2 px-6 rounded-lg">
                          Not Available Yet
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card hover:translate-y-[-5px] transition-all duration-300">
                    <div className="p-4 border-b border-white/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium mb-1">Biology Final Exam</h3>
                          <p className="text-white/70 text-sm">50 multiple-choice questions • 90 minutes</p>
                        </div>
                        <span className="bg-white/20 text-white/70 px-2 py-1 rounded text-xs flex items-center">
                          <Clock size={12} className="mr-1" />
                          2 weeks remaining
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <p className="text-white/70 text-sm mb-1">Subject: Biology</p>
                          <p className="text-white/70 text-sm">Teacher: Dr. Smith</p>
                        </div>
                        <button className="text-white/30 cursor-not-allowed bg-white/5 py-2 px-6 rounded-lg">
                          Not Available Yet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Test In Progress */}
              <div className="glass-card p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium">Test Example</h3>
                  <div className="flex items-center">
                    <span className="text-white/70 mr-3">Time Remaining:</span>
                    <span className="font-mono bg-white/10 px-3 py-1 rounded text-light-teal">43:21</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <div className="bg-gradient-to-r from-light-teal to-deep-blue h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-white/70">
                    <span>Question 12 of 30</span>
                    <span>40% complete</span>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-medium mb-4">What is Newton's first law of motion?</h3>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full border-2 border-white/30 mr-3 flex-shrink-0 hover:border-light-teal cursor-pointer transition-colors"></div>
                      <span className="text-white/90">Objects at rest stay at rest unless acted upon by a force</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full border-2 border-light-teal mr-3 flex-shrink-0 bg-light-teal/20 cursor-pointer"></div>
                      <span className="text-white">Objects in motion stay in motion unless acted upon by a force</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full border-2 border-white/30 mr-3 flex-shrink-0 hover:border-light-teal cursor-pointer transition-colors"></div>
                      <span className="text-white/90">For every action, there is an equal and opposite reaction</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full border-2 border-white/30 mr-3 flex-shrink-0 hover:border-light-teal cursor-pointer transition-colors"></div>
                      <span className="text-white/90">Force equals mass times acceleration</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="btn-outline py-2 px-6">
                    Previous
                  </button>
                  <button className="btn-primary py-2 px-6">
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'results' && (
            <div className="animate-fade-in">
              <div className="glass-card p-6 mb-6">
                <h2 className="text-xl font-medium mb-6">Performance Overview</h2>

                <div className="bg-white/5 p-6 rounded-lg mb-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <h3 className="text-lg font-medium mb-4">Average Scores by Subject</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Physics</span>
                            <span>85%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="bg-light-teal h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Chemistry</span>
                            <span>72%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="bg-light-teal h-2 rounded-full" style={{ width: '72%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Biology</span>
                            <span>90%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="bg-light-teal h-2 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Mathematics</span>
                            <span>78%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="bg-light-teal h-2 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2">
                      <h3 className="text-lg font-medium mb-4">Progress Over Time</h3>
                      <div className="h-48 bg-white/5 rounded-lg flex items-end justify-between p-4">
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-light-teal to-deep-blue w-full rounded-t-sm" style={{ height: '30%' }}></div>
                          <span className="text-xs text-white/70 mt-2">Mar</span>
                        </div>
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-light-teal to-deep-blue w-full rounded-t-sm" style={{ height: '45%' }}></div>
                          <span className="text-xs text-white/70 mt-2">Apr</span>
                        </div>
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-light-teal to-deep-blue w-full rounded-t-sm" style={{ height: '60%' }}></div>
                          <span className="text-xs text-white/70 mt-2">May</span>
                        </div>
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-light-teal to-deep-blue w-full rounded-t-sm" style={{ height: '70%' }}></div>
                          <span className="text-xs text-white/70 mt-2">Jun</span>
                        </div>
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-light-teal to-deep-blue w-full rounded-t-sm" style={{ height: '65%' }}></div>
                          <span className="text-xs text-white/70 mt-2">Jul</span>
                        </div>
                        <div className="flex flex-col items-center w-1/6">
                          <div className="bg-gradient-to-t from-light-teal to-deep-blue w-full rounded-t-sm" style={{ height: '82%' }}></div>
                          <span className="text-xs text-white/70 mt-2">Aug</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-medium mb-4">Test Results</h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/70 text-sm font-medium">
                          Test Name
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 text-sm font-medium">
                          Date
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 text-sm font-medium">
                          Score
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 text-sm font-medium">
                          Grade
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 text-sm font-medium">
                          Status
                        </th>
                        <th className="text-right py-3 px-4 text-white/70 text-sm font-medium">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span>Biology Quiz</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-white/70">Aug 10, 2023</td>
                        <td className="py-3 px-4">27/30 (90%)</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                            A
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="flex items-center text-green-400">
                            <CheckCircle size={14} className="mr-1" />
                            Completed
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button className="text-light-teal hover:text-white transition-colors text-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span>Chemistry Test</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-white/70">Aug 5, 2023</td>
                        <td className="py-3 px-4">15/20 (75%)</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                            B
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="flex items-center text-green-400">
                            <CheckCircle size={14} className="mr-1" />
                            Completed
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button className="text-light-teal hover:text-white transition-colors text-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span>Physics Quiz</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-white/70">Jul 28, 2023</td>
                        <td className="py-3 px-4">41/50 (82%)</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                            B
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="flex items-center text-green-400">
                            <CheckCircle size={14} className="mr-1" />
                            Completed
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button className="text-light-teal hover:text-white transition-colors text-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span>Mathematics Test</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-white/70">Jul 15, 2023</td>
                        <td className="py-3 px-4">23/30 (77%)</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                            C
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="flex items-center text-green-400">
                            <CheckCircle size={14} className="mr-1" />
                            Completed
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button className="text-light-teal hover:text-white transition-colors text-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'notifications' && (
            <div className="animate-fade-in">
              <div className="glass-card p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">Notifications</h2>
                  <div className="flex items-center space-x-2">
                    <button className="btn-outline text-sm py-1.5 px-3">
                      Mark All Read
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 border-l-4 border-neon-pink p-4 rounded-r-lg animate-fade-in hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center mr-4 mt-1">
                          <Bell size={18} className="text-neon-pink" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">New Test Available</h4>
                          <p className="text-white/70 text-sm mb-2">
                            Physics Mid-term test is now available to take.
                          </p>
                          <button className="text-light-teal hover:text-white transition-colors text-sm flex items-center">
                            Take Test
                            <ChevronRight size={14} className="ml-1" />
                          </button>
                        </div>
                      </div>
                      <span className="text-white/50 text-xs">2 hours ago</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border-l-4 border-light-teal p-4 rounded-r-lg animate-fade-in hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-light-teal/20 flex items-center justify-center mr-4 mt-1">
                          <CheckCircle size={18} className="text-light-teal" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Test Graded</h4>
                          <p className="text-white/70 text-sm mb-2">
                            Your Biology Quiz has been graded. You scored 90%.
                          </p>
                          <button className="text-light-teal hover:text-white transition-colors text-sm flex items-center">
                            View Results
                            <ChevronRight size={14} className="ml-1" />
                          </button>
                        </div>
                      </div>
                      <span className="text-white/50 text-xs">Yesterday</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border-l-4 border-white/30 p-4 rounded-r-lg animate-fade-in hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-1">
                          <AlertCircle size={18} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Reminder</h4>
                          <p className="text-white/70 text-sm mb-2">
                            Chemistry Quiz is scheduled for next week.
                          </p>
                          <span className="text-white/50 text-sm">Aug 18, 2023 • 2:00 PM</span>
                        </div>
                      </div>
                      <span className="text-white/50 text-xs">2 days ago</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border-l-4 border-white/30 p-4 rounded-r-lg animate-fade-in hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-1">
                          <Clock size={18} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Test Schedule Update</h4>
                          <p className="text-white/70 text-sm mb-2">
                            Mathematics Test has been rescheduled to next month.
                          </p>
                          <span className="text-white/50 text-sm">Sep 5, 2023 • 10:00 AM</span>
                        </div>
                      </div>
                      <span className="text-white/50 text-xs">1 week ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
