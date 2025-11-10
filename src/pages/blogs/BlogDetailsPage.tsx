import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogsData } from "../../components/data/blog";

const BlogDetailsPage: React.FC = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Link to="/blogs" className="text-orange-500 hover:underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-xl shadow-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-orange-500 text-sm font-semibold mb-6">
          {new Date(blog.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>

        <div className="mt-8">
          <Link
            to="/blogs"
            className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
