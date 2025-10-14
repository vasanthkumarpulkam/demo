import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Briefcase, Search, Bell, User, Menu, X, LogOut, Settings, MessageSquare, BarChart3 } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    navigate('/');
    setIsProfileOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-purple-600 font-bold text-xl hover:text-purple-700 transition-colors">
            <Briefcase className="w-8 h-8" />
            <span>Service Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Find Jobs
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              How It Works
            </Link>
            <Link to="/support" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Support
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Side - Auth */}
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                {/* Notifications */}
                <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Messages */}
                <Link to="/messages" className="p-2 text-gray-400 hover:text-gray-600 relative">
                  <MessageSquare className="h-5 w-5" />
                </Link>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-purple-600" />
                    </div>
                    <span className="hidden sm:block font-medium">{currentUser.displayName}</span>
                  </button>

                  {/* Dropdown Menu */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border">
                      <div className="px-4 py-2 border-b">
                        <p className="text-sm font-medium text-gray-900">{currentUser.displayName}</p>
                        <p className="text-sm text-gray-500">{currentUser.email}</p>
                        <span className="inline-block mt-1 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                          {currentUser.role}
                        </span>
                      </div>
                      <Link
                        to="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <BarChart3 className="h-4 w-4 mr-3" />
                        Dashboard
                      </Link>
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <User className="h-4 w-4 mr-3" />
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Settings className="h-4 w-4 mr-3" />
                        Settings
                      </Link>
                      <div className="border-t my-1"></div>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/signin"
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-gray-600"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <Link
                to="/jobs"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Jobs
              </Link>
              <Link
                to="/how-it-works"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/support"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              
              {currentUser && (
                <>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/messages"
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Messages
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}