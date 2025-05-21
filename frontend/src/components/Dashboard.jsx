import { Link } from 'react-router-dom';
import TicketTable from './TicketTable';
import LeadTable from './LeadTable';
import Chart from './Chart';
import '../styles/components/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Employee Dashboard</h1>
      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2>Customer Support Tickets</h2>
          <TicketTable />
        </div>
        <div className="dashboard-section">
          <h2>Lead Generation</h2>
          <LeadTable />
        </div>
        <div className="dashboard-section">
          <h2>AI Agents</h2>
          <div className="agent-links">
            <Link to="/copywriting">Copywriting Agent</Link>
            <Link to="/legal">Legal Advisor</Link>
            <Link to="/finance">Financial Advisor</Link>
            <Link to="/marketing">Marketing Agent</Link>
          </div>
        </div>
        <div className="dashboard-section">
          <h2>Analytics</h2>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;