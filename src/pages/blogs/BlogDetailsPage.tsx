import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import config from "../../../config";

interface Blog {
  id: number;
  title: string;
  slug: string;
  image_path: string;
  description: string;
  content: string;
}

const BlogDetailsPage: React.FC = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/blogs/single.php?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold">Loading blog...</h2>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Blog Not Found</h2>
        <Link to="/blogs" className="text-[#273aa0] hover:underline">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* BLOG IMAGE (balanced size) */}
        <div className="w-full bg-gray-200 rounded-xl shadow-md p-2 mb-8">
          <img
            src={`${config.API_BASE_URL}/${blog.image_path}`}
            alt={blog.title}
            className="w-full max-h-[420px] object-cover rounded-lg"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{blog.title}</h1>

        {/* SHORT DESCRIPTION */}
        <div
          className="text-gray-600 text-lg leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />

        {/* FULL CONTENT */}
        <div
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>

        {/* BACK BUTTON */}
        <div className="mt-10">
          <Link
            to="/blogs"
            className="bg-[#273aa0] text-white px-8 py-3 rounded-full hover:bg-[#182a94] transition inline-block text-lg"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
