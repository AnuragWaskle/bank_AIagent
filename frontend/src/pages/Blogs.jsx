import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import axios from 'axios';
import '../styles/style.css';

const Blogs = ({ isAuthenticated, setIsAuthenticated }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.post('http://localhost:8000/copywriting', {
          prompt: 'Generate a list of blog titles and excerpts about banking',
          content_type: 'blog'
        });
        // Mock response structure
        const mockBlogs = [
          { title: 'Top 5 Loan Tips', excerpt: 'Learn how to get the best loan rates...', date: '2025-05-20' },
          { title: 'Saving for the Future', excerpt: 'Start building your wealth today...', date: '2025-05-19' }
        ];
        setBlogs(mockBlogs); // Replace with response.data.content if using real API
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blogs-page">
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <section className="blogs-section">
        <h1>Financial Insights</h1>
        <div className="blog-list">
          {blogs.map((blog, index) => (
            <BlogCard key={index} title={blog.title} excerpt={blog.excerpt} date={blog.date} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;