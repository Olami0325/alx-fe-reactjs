import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  // ✅ v5 style
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"], 
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Failed to fetch posts");
      return res.json();
    },
  });
  

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>

      {/* 🔄 Refetch Button */}
      <button onClick={() => refetch()} style={{ marginBottom: "1rem" }}>
        🔄 Refetch Posts
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default PostsComponent;
