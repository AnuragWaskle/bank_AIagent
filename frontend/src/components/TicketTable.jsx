import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/tickettable.css';

const TicketTable = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, []);

  const handleUpdate = async (ticketId, status, response) => {
    try {
      await axios.put(`http://localhost:8000/tickets/${ticketId}`, { status, response });
      setTickets(tickets.map(ticket =>
        ticket.id === ticketId ? { ...ticket, status, response } : ticket
      ));
    } catch (error) {
      console.error('Error updating ticket:', error);
    }
  };

  return (
    <table className="ticket-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer ID</th>
          <th>Query</th>
          <th>Status</th>
          <th>Response</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>{ticket.customer_id}</td>
            <td>{ticket.query}</td>
            <td>{ticket.status}</td>
            <td>{ticket.response || 'N/A'}</td>
            <td>
              <button onClick={() => handleUpdate(ticket.id, 'closed', 'Resolved by AI')}>
                Close
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicketTable;