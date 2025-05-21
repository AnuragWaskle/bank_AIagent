import '../styles/components/blogcard.css';

const BlogCard = ({ title, excerpt, date }) => {
  return (
    <div className="blog-card">
      <h3>{title}</h3>
      <p className="blog-excerpt">{excerpt}</p>
      <p className="blog-date">{new Date(date).toLocaleDateString()}</p>
      <a href="#" className="blog-readmore">Read More</a>
    </div>
  );
};

export default BlogCard;