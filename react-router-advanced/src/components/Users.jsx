
import { Link } from "react-router-dom";

const Users = () => {
  const users = [
    { id: 1, name: "Saheed" },
    { id: 2, name: "Aisha" },
    { id: 3, name: "John" },
  ];

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
