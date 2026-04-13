import React from "react";
import "./blog.css";

import img1 from "../../asset/blog/blog1.jpg";
import img2 from "../../asset/blog/blog2.jpg";
import img3 from "../../asset/blog/blog3.jpg";

function BlogElement() {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Luxury Rooms You Must Try",
      desc: "Discover the most comfortable and premium rooms designed for your relaxation and experience.",
      img: img1,
      date: "Jan 12, 2026",
      category: "Rooms"
    },
    {
      id: 2,
      title: "Why Our Hotel is Perfect for Families",
      desc: "Spacious rooms, family-friendly services, and activities for everyone to enjoy.",
      img: img2,
      date: "Feb 05, 2026",
      category: "Family"
    },
    {
      id: 3,
      title: "Experience Fine Dining With Us",
      desc: "Enjoy world-class meals prepared by professional chefs in a relaxing environment.",
      img: img3,
      date: "Mar 20, 2026",
      category: "Food"
    }
  ];

  return (
    <>



      <section className="blog-section">
      

        <div className="blog-container">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              
              <img src={blog.img} alt={blog.title} />

              <div className="blog-content">
                <span className="blog-meta">
                  {blog.date} • {blog.category}
                </span>

                <h2>{blog.title}</h2>

                <p>{blog.desc}</p>

                <button className="blog-btn">
                  Read More
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

    </>
  );
}

export default BlogElement;