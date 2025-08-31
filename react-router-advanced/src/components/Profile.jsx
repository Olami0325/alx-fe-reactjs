// src/components/Profile.jsx
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>

      {/* Sub-navigation for nested routes */}
      <nav style={{ marginBottom: "10px" }}>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested routes from App.jsx will be injected here */}
      
      <Outlet />
    </div>
  );
};

export default Profile;
