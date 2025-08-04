import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const searchUsers = async (newPage = 1) => {
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData(username, location, minRepos, newPage);
      if (data && data.items && data.items.length > 0) {
        if (newPage === 1) setUsers(data.items);
        else setUsers((prev) => [...prev, ...data.items]);
        setTotalCount(data.total_count);
        setPage(newPage);
      } else {
        if (newPage === 1) setUsers([]);
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([]);
    setPage(1);
    searchUsers(1);
  };

  const handleLoadMore = () => {
    searchUsers(page + 1);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">GitHub User Search</h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full border rounded px-3 py-2"
        />

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Filter by location (optional)"
          className="w-full border rounded px-3 py-2"
        />

        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum number of repos (optional)"
          className="w-full border rounded px-3 py-2"
          min={0}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-blue-600">Loading...</p>}
        {error && <p className="text-red-600">Looks like we cant find the user</p>}

        {users.length > 0 && (
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-4 p-4 border rounded"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold">{user.login}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {users.length > 0 && users.length < totalCount && !loading && (
          <button
            onClick={handleLoadMore}
            className="mt-4 w-full bg-gray-300 py-2 rounded hover:bg-gray-400"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
