import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Home = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <div className="home-page">
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <section className="hero-section" style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}>
        <h1>Welcome to SmartBank</h1>
        <p>Your AI-powered banking partner for seamless financial solutions.</p>
        <Link to="/calculators" className="hero-cta">Explore Financial Tools</Link>
      </section>
      <section className="home-content">
        <h2>Why Choose SmartBank?</h2>
        <div className="features">
          <div className="feature">
            <h3>24/7 AI Support</h3>
            <p>Chat or call our AI agents anytime for instant help.</p>
          </div>
          <div className="feature">
            <h3>Smart Calculators</h3>
            <p>Calculate EMI, FD returns, and more with ease.</p>
          </div>
          <div className="feature">
            <h3>Expert Insights</h3>
            <p>Read our AI-generated blogs for financial tips.</p>
          </div>
        </div>
      </section>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Home;