import React from 'react';
import { NavLink } from 'react-router-dom';
import { MessageSquare, Database, Bookmark, User, Book, FileText, Scale } from 'lucide-react';

export const Navigation = () => {
  return (
    <div className="w-64 bg-white p-4 flex flex-col h-screen">
      <h2 className="text-gray-600 font-medium mb-4">Navigation</h2>
      
      <NavLink to="/chat" className={({ isActive }) => 
        `flex items-center p-2 rounded-lg mb-1 ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
      }>
        <MessageSquare className="w-5 h-5 mr-3" />
        AI Chat
      </NavLink>

      <NavLink to="/database" className={({ isActive }) => 
        `flex items-center p-2 rounded-lg mb-1 ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
      }>
        <Database className="w-5 h-5 mr-3" />
        Legal Database
      </NavLink>

      <NavLink to="/saved" className={({ isActive }) => 
        `flex items-center p-2 rounded-lg mb-1 ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
      }>
        <Bookmark className="w-5 h-5 mr-3" />
        Saved Responses
      </NavLink>

      <NavLink to="/profile" className={({ isActive }) => 
        `flex items-center p-2 rounded-lg mb-6 ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
      }>
        <User className="w-5 h-5 mr-3" />
        Profile
      </NavLink>

      <h2 className="text-gray-600 font-medium mb-4">Legal Categories</h2>
      
      <NavLink to="/constitution" className={({ isActive }) => 
        `flex items-center p-2 rounded-lg mb-1 ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
      }>
        <Book className="w-5 h-5 mr-3" />
        Constitution
      </NavLink>

      <NavLink to="/central-acts" className={({ isActive }) => 
        `flex items-center p-2 rounded-lg mb-1 ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
      }>
        <FileText className="w-5 h-5 mr-3" />
        Central Acts
      </NavLink>

      <NavLink to="/state-acts" className={({ isActive }) => 
        `flex items-center p-2 rounded-lg mb-1 ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
      }>
        <FileText className="w-5 h-5 mr-3" />
        State Acts
      </NavLink>

      <NavLink to="/judgments" className={({ isActive }) => 
        `flex items-center p-2 rounded-lg mb-1 ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
      }>
        <Scale className="w-5 h-5 mr-3" />
        Supreme Court Judgments
      </NavLink>
    </div>
  );
};