import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase, hasSupabaseConfig } from './lib/supabase';
import { Auth } from './components/Auth';
import { Chat } from './components/Chat';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!hasSupabaseConfig) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!hasSupabaseConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Setup Required</h2>
            <p className="text-gray-600 mb-6">
              Please click the "Connect to Supabase" button in the top right to set up your Supabase project.
            </p>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                This will automatically create the necessary configuration for your application.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!session) {
    return <Auth />;
  }

  return (
    <Router>
      <div className="flex h-screen">
        <Navigation />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-auto bg-gray-50">
            <Routes>
              <Route path="/chat" element={<Chat />} />
              <Route path="/" element={<Navigate to="/chat" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;