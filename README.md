# SmartBank: AI-Powered Private Bank System

## Overview
SmartBank is an innovative, AI-augmented private banking system designed for a hackathon. It features a **customer-facing website** for seamless banking interactions and an **employee dashboard** for efficient operations. Powered by AI agents, it automates customer support, lead generation, copywriting, legal decisions, financial forecasting, and marketing, reducing costs and enhancing user experience.

### Features
- **Customer Website**:
  - 24/7 AI chatbot and voice support (via Vapi.ai) for instant query resolution.
  - Financial calculators (EMI, FD, Interest, Net Worth).
  - AI-generated blog posts for financial education and SEO.
- **Employee Dashboard**:
  - Secure login with JWT authentication.
  - Ticket system for managing unresolved customer queries.
  - AI agents for copywriting, legal analysis, financial forecasting, and marketing.
  - Lead generation and analytics with interactive charts.
- **Bonus Features**:
  - Email notifications for tickets/leads.
  - Loan document upload and AI-driven approval/denial.
  - Responsive, banking-themed UI (blue, white, gold).

### Tech Stack
- **Frontend**: React Vite, custom CSS, Chart.js, Axios, React Router.
- **Backend**: FastAPI, SQLite, SQLAlchemy, PyJWT, LangChain.
- **AI Services**: Grok API (xAI), Vapi.ai (voice), EmailJS (notifications).
- **Deployment**: Vercel (frontend), Render (backend).

## Folder Structure
```
smartbank-project/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── main.css
│   ├── vite.config.js
│   ├── package.json
│   ├── .env
│   ├── README.md
│   └── .gitignore
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
- API keys:
  - Grok API: [https://x.ai/api](https://x.ai/api)
  - Vapi.ai: [https://vapi.ai](https://vapi.ai)
  - EmailJS: [https://www.emailjs.com](https://www.emailjs.com)

## Setup Instructions

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
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
5. Run the backend:
   ```bash
   uvicorn app.main:app --reload
   ```
   Access API at `http://localhost:8000`.

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
5. Run the frontend:
   ```bash
   npm run dev
   ```
   Access at `http://localhost:5173`.

## Deployment
- **Frontend**: Deploy to Vercel:
  ```bash
  vercel --prod
  ```
- **Backend**: Deploy to Render:
  ```bash
  render deploy
  ```
- Update `.env` files with production URLs and API keys.

## Usage
- **Customer Website**: Visit `http://localhost:5173` to explore the homepage, calculators, blogs, and contact page with AI chatbot/voice support.
- **Employee Dashboard**: Access `/login` to authenticate and use the dashboard (`/dashboard`) for managing tickets, leads, and AI agents.
- **AI Agents**: Generate blogs, analyze loans, forecast finances, and create marketing content via the dashboard.

## Testing
- Backend: Run `pytest` in `/backend` to test API endpoints.
- Frontend: Manually test pages and components at `http://localhost:5173`.

## Hackathon Pitch
SmartBank is a revolutionary banking platform that automates 70% of operations using free AI tools (Grok, Vapi.ai, EmailJS). It offers a sleek customer website and a powerful employee dashboard, streamlining support, sales, and decision-making with a modern, scalable design.

## License
MIT License