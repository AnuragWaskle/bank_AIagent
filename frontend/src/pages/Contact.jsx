import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { initiateVoiceCall } from '../utils/vapi';
import '../styles/style.css';

const Contact = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleVoiceCall = () => {
    initiateVoiceCall(); // Triggers Vapi.ai voice call
  };

  return (
    <div className="contact-page">
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <section className="contact-section">
        <h1>Contact Us</h1>
        <p>Reach out via chat or phone for instant support.</p>
        <div className="contact-options">
          <div className="contact-chat">
            <h2>Chat with AI</h2>
            <Chatbot />
          </div>
          <div className="contact-call">
            <h2>Call Our AI Agent</h2>
            <button onClick={handleVoiceCall} className="call-button">Start Voice Call</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;