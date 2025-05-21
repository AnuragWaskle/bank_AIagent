import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/components/chart.css';

const AnalyticsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Tickets Resolved',
          data: [10, 20, 15, 25, 30],
          backgroundColor: '#1E3A8A',
        }],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default AnalyticsChart;