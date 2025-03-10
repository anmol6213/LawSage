import React from 'react';
import { Scale, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

export const Header = () => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8" />
              <span className="text-xl font-bold">Lawsage</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-4">
            <Link to="/chat" className="hover:text-indigo-200">Chat</Link>
            <Link to="/database" className="hover:text-indigo-200">Database</Link>
            <Link to="/saved" className="hover:text-indigo-200">Saved</Link>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-1 hover:text-indigo-200"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};