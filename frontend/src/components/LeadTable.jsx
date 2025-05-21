import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/leadtable.css';

const LeadTable = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get('http://localhost:8000/leads');
        setLeads(response.data);
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };
    fetchLeads();
  }, []);

  return (
    <table className="lead-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Interest Type</th>
          <th>Preferred Product</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {leads.map(lead => (
          <tr key={lead.id}>
            <td>{lead.id}</td>
            <td>{lead.email}</td>
            <td>{lead.interest_type}</td>
            <td>{lead.preferred_product}</td>
            <td>{new Date(lead.created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;