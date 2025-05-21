import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardComponent from '../components/Dashboard';
import '../styles/style.css';

const Dashboard = ({ isAuthenticated, setIsAuthenticated }) => {
  if (!isAuthenticated) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div className="dashboard-page">
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <DashboardComponent />
      <Footer />
    </div>
  );
};

export default Dashboard;