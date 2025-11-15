import React from "react";
import { Link } from "react-router-dom"; // 👈 Make sure this path is correct
import { blogsData } from "../../components/data/blog";

const BlogsPage: React.FC = () => {
  // 🧩 Console check
  console.log("Blogs Data:", blogsData);

  // 🛡️ Defensive check - if no data
  if (!blogsData || blogsData.length === 0) {
    return (
      <section className="bg-white py-16 px-5 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-3">
          ⚠️ No Blogs Found
        </h1>
        <p className="text-gray-600">
          Please check your data import or API connection.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 px-5">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">All Blogs</h1>
        <p className="text-gray-600">
          Explore all our latest blogs and stay ahead with industry insights.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-50 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{blog.desc}</p>
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

export default BlogsPage;
