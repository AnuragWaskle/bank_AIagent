import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Calculator from '../components/Calculator';
import '../styles/style.css';

const Calculators = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <div className="calculators-page">
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <section className="calculators-section">
        <h1>Financial Calculators</h1>
        <p>Plan your finances with our easy-to-use tools.</p>
        <Calculator />
      </section>
      <Footer />
    </div>
  );
};

export default Calculators;