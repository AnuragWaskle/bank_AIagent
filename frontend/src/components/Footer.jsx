import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SmartBank</h3>
          <p>Your trusted AI-powered banking partner.</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="/calculators">Financial Tools</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@smartbank.com</p>
          <p>Phone: +1-800-SMARTBANK</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SmartBank. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;