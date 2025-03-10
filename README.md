# Lawsage - AI-Powered Legal Assistant

Lawsage is an intelligent legal assistant application designed to provide information about Indian laws, legal procedures, and rights. Built with modern web technologies, it offers an interactive chat interface powered by AI to help users understand legal concepts and procedures.

![Lawsage Screenshot](https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200)

## Features

- 🤖 AI-powered legal assistance
- 💬 Interactive chat interface
- 📚 Comprehensive legal database
- 🔒 Secure user authentication
- 💾 Chat history persistence
- 📱 Responsive design
- 📑 Legal document categories
- ⚖️ Supreme Court judgments section

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase
- **AI Model**: HuggingFace Inference API (microsoft/phi-2)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM

## Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or higher)
- npm or yarn
- Supabase account
- HuggingFace API key

## Environment Variables

Create a `.env` file in the root directory with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_HUGGINGFACE_API_KEY=your_huggingface_api_key
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lawsage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
lawsage/
├── src/
│   ├── components/     # React components
│   ├── lib/           # Utility functions and API clients
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── package.json       # Project dependencies and scripts
```

## Features in Detail

### Authentication
- Email and password authentication
- Protected routes
- Session management

### Chat Interface
- Real-time AI responses
- Markdown support
- Message history
- Loading states
- Error handling

### Navigation
- Intuitive sidebar navigation
- Legal category sections
- Profile management
- Saved responses

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Supabase](https://supabase.com/) for authentication and database
- [HuggingFace](https://huggingface.co/) for AI model hosting
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons

## Support

For support, email support@lawsage.com or open an issue in the repository.
