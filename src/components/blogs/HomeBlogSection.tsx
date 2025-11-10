import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../data/blog";
import type { Blog } from "../data/blog";


const HomeBlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // 🔹 API call (future)
    // fetch("https://api.yourdomain.com/blogs")
    //   .then((res) => res.json())
    //   .then((data) => setBlogs(data));

    // 🔹 Demo data for now
    const sorted = [...blogsData].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setBlogs(sorted.slice(0, 3));
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT IMAGE */}
        <div>
          <img
            src="/images/blog-header.jpg"
            alt="Industry Expertise"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h3 className="text-[#273aa0] font-semibold mb-2">
            Industry Insights
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            We deliver insights and modern solutions through our latest blogs
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest tech trends and web innovations.
            Explore our latest blogs and learn how digital solutions drive
            business growth.
          </p>

          <Link
            to="/blogs"
            className="inline-block bg-[#273aa0] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1b2fa1] transition"
          >
            View All Blogs →
          </Link>
        </div>
      </div>

      {/* BLOG CARDS */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {blog.desc}
              </p>
              <p className="text-[#273aa0] text-xs font-semibold mb-3">
                {new Date(blog.date).toLocaleDateString()}
              </p>
              <Link
                to={`/blogs/${blog.id}`}
                className="text-[#273aa0] font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBlogSection;
