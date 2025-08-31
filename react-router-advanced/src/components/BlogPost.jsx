// src/components/BlogPost.jsx
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // get the dynamic :id from the URL

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Blog Post</h2>
      <p className="mt-2">You are viewing blog post with ID: <strong>{id}</strong></p>
    </div>
  );
};

export default BlogPost;
