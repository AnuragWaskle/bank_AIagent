# SmartBank: AI-Powered Private Bank System

## Overview
SmartBank is an AI-augmented private banking system built for a hackathon, featuring a **customer-facing website** and an **employee dashboard**. The system leverages AI agents to automate customer support, lead generation, copywriting, legal decisions, financial forecasting, and marketing, reducing operational costs and enhancing user experience.

### Features
- **Customer Website**:
  - AI chatbot and voice support (via Vapi.ai) for 24/7 query resolution.
  - Financial calculators (EMI, FD, Interest, Net Worth).
  - AI-generated blog posts for financial insights.
- **Employee Dashboard**:
  - Login-based access with JWT authentication.
  - Ticket system for unresolved customer queries.
  - AI agents for copywriting, legal analysis, financial forecasting, and marketing.
  - Lead generation and analytics with Chart.js.
- **Tech Stack**:
  - **Frontend**: React Vite, custom CSS (no Tailwind), Chart.js, Axios, React Router.
  - **Backend**: FastAPI, SQLite, SQLAlchemy, PyJWT, LangChain.
  - **AI**: Grok API (xAI), Vapi.ai (voice), EmailJS (notifications).
  - **Deployment**: Vercel (frontend), Render (backend).

## Folder Structure
```
smartbank-project/
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   └── assets/
│   │       ├── hero-bg.jpg
│   │       └── icons/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── Chatbot.js
│   │   │   ├── Calculator.js
│   │   │   ├── BlogCard.js
│   │   │   ├── Dashboard.js
│   │   │   ├── TicketTable.js
│   │   │   ├── LeadTable.js
│   │   │   ├── Chart.js
│   │   │   └── Login.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Calculators.js
│   │   │   ├── Blogs.js
│   │   │   ├── Contact.js
│   │   │   └── Dashboard.js
│   │   ├── styles/
│   │   │   ├── style.css
│   │   │   ├── main.css
│   │   │   └── components/
│   │   │       ├── navbar.css
│   │   │       ├── footer.css
│   │   │       ├── chatbot.css
│   │   │       └── dashboard.css
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── vapi.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── main.css
│   ├── vite.config.js
│   ├── package.json
│   └── .env
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── services/
│   │   ├── db/
│   │   ├── main.py
│   │   └── config.py
│   ├── tests/
│   ├── requirements.txt
│   └── .env
├── README.md
└── .gitignore
```

## Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- API keys for:
  - Grok API (xAI): [https://x.ai/api](https://x.ai/api)
  - Vapi.ai: [https://vapi.ai](https://vapi.ai)
  - EmailJS: [https://www.emailjs.com](https://www.emailjs.com)

## Setup Instructions

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `/frontend` with:
   ```
   VITE_VAPI_API_KEY=your_vapi_api_key_here
   VITE_API_BASE_URL=http://localhost:8000
   ```
4. Add assets (logo.png, hero-bg.jpg, favicon.ico) to `/public`.
5. Run the development server:
   ```bash
   npm run dev
   ```
   Access at `http://localhost:5173`.

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Create a `.env` file in `/backend` with:
   ```
   GROK_API_KEY=your_grok_api_key_here
   VAPI_API_KEY=your_vapi_api_key_here
   EMAILJS_API_KEY=your_emailjs_api_key_here
   EMAILJS_SERVICE_ID=your_emailjs_service_id_here
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
   ```
5. Run the backend server:
   ```bash
   uvicorn app.main:app --reload
   ```
   Access API at `http://localhost:8000`.

## Deployment
- **Frontend**: Deploy to Vercel (`vercel --prod`).
- **Backend**: Deploy to Render (`render deploy`) with SQLite database.
- Update `.env` files with production API URLs.

## Usage
- **Customer Website**: Visit `http://localhost:5173` to explore the homepage, calculators, blogs, and contact page with AI chatbot/voice support.
- **Employee Dashboard**: Login at `/login` to access the dashboard (`/dashboard`) for ticket management, lead generation, and AI agents.
- **AI Agents**: Use the dashboard to generate content, analyze loans, forecast finances, and create marketing campaigns.

## Hackathon Pitch
SmartBank automates 70% of banking operations using AI, offering a seamless customer experience and powerful employee tools. With free tools like React Vite, FastAPI, Grok API, and Vapi.ai, it’s a cost-efficient, scalable solution for modern banking.

## License
MIT License