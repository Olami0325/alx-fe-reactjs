import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px",
        display: "flex",
        justifyContent : "center"
      }}
    >
      <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>
        Home
      </Link>
      <Link to="/about" style={{ color: "#fff", marginRight: "15px" }}>
        About
      </Link>
      <Link to="/services" style={{ color: "#fff", marginRight: "15px" }}>
        Services
      </Link>
      <Link to="/contact" style={{ color: "#fff" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
