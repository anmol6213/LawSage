# LawSage - AI-Powered Legal Assistant for Indian Law

**Empowering You with Instant Legal Insights and Guidance**

LawSage is an intelligent legal assistant designed to demystify Indian laws, legal procedures, and your fundamental rights. Leveraging cutting-edge AI, we provide an interactive chat interface to help you navigate the complexities of the Indian legal system.

**Unlock Legal Clarity with LawSage:**

* **AI-Powered Legal Assistance:** Get instant, accurate responses to your legal queries with our advanced AI model (microsoft/phi-2 via HuggingFace Inference API).
* **Interactive Chat Interface:** Engage in natural conversations to understand legal concepts and procedures.
* **Comprehensive Legal Database:** Access a wealth of information on Indian laws, categorized for easy navigation.
* **Supreme Court Judgments:** Stay informed with a dedicated section for key Supreme Court rulings.
* **Secure User Authentication:** Protect your data with Supabase Auth's robust email and password authentication.
* **Persistent Chat History:** Review your past conversations and saved responses anytime.
* **Responsive Design:** Access LawSage seamlessly on any device.
* **Categorized Legal Documents:** Find relevant legal information quickly with our intuitive categorization.

![Lawsage Screenshot](https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200)

**Why Choose LawSage?**

LawSage simplifies legal information, making it accessible to everyone. Whether you're a student, a professional, or simply seeking clarity on your rights, LawSage is your trusted legal companion.

**Tech Stack:**

* **Frontend:** React with TypeScript
* **Styling:** Tailwind CSS
* **Authentication & Database:** Supabase
* **AI Model:** HuggingFace Inference API (microsoft/phi-2)
* **Icons:** Lucide React
* **Build Tool:** Vite
* **Routing:** React Router DOM

**Getting Started:**

1.  **Prerequisites:**
    * Node.js (v18+)
    * npm or yarn
    * Supabase account
    * HuggingFace API key

2.  **Environment Variables:**
    * Create a `.env` file with:
        ```env
        VITE_SUPABASE_URL=your_supabase_url
        VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
        VITE_HUGGINGFACE_API_KEY=your_huggingface_api_key
        ```

3.  **Installation:**
    ```bash
    git clone [https://github.com/anmol6213/LawSage.git](https://github.com/anmol6213/LawSage.git)
    cd lawsage
    npm install
    npm run dev
    ```

**Project Structure:**
lawsage/
├── src/
│   ├── components/      # React components
│   ├── lib/             # Utility functions and API clients
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/            # Static assets
└── package.json       # Project dependencies and scripts

**Key Features in Detail:**

* **Authentication:**
    * Email/password authentication
    * Protected routes
    * Session management
* **Chat Interface:**
    * Real-time AI responses
    * Markdown support
    * Message history
    * Loading states
    * Error handling
* **Navigation:**
    * Intuitive sidebar navigation
    * Legal category sections
    * Profile management
    * Saved responses

**Contributing:**

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

**License:**

This project is licensed under the MIT License.

**Acknowledgments:**

* [Supabase](https://supabase.com/)
* [HuggingFace](https://huggingface.co/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide](https://lucide.dev/)

**Support:**

Email support@lawsage.com or open an issue on GitHub.
