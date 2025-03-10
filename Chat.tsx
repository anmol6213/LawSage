import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { supabase, ChatMessage } from '../lib/supabase';
import { generateResponse } from '../lib/huggingface';
import ReactMarkdown from 'react-markdown';

export const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setLoading(true);

    // Add user message to chat
    const newUserMessage: ChatMessage = {
      id: crypto.randomUUID(),
      content: userMessage,
      role: 'user',
      created_at: new Date().toISOString(),
      session_id: crypto.randomUUID(),
    };

    setMessages(prev => [...prev, newUserMessage]);

    try {
      // Generate response using Hugging Face
      const aiResponse = await generateResponse(userMessage);
      
      // Add AI response to chat
      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        content: aiResponse,
        role: 'assistant',
        created_at: new Date().toISOString(),
        session_id: newUserMessage.session_id,
      };

      setMessages(prev => [...prev, aiMessage]);

      // Save messages to Supabase
      if (supabase) {
        await supabase.from('messages').insert([newUserMessage, aiMessage]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        content: 'I apologize, but I encountered an error. Please try again.',
        role: 'assistant',
        created_at: new Date().toISOString(),
        session_id: newUserMessage.session_id,
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-3xl rounded-lg p-4 ${
                message.role === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white shadow-md'
              }`}
            >
              <ReactMarkdown className="prose prose-sm max-w-none">
                {message.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t bg-white">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Indian laws, legal procedures, or rights..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? (
              'Processing...'
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Lawsage provides general legal information, not legal advice. Always consult with a qualified lawyer for specific legal matters.
        </p>
      </form>
    </div>
  );
};