// ...existing code...
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="appbar" role="navigation" aria-label="Main navigation">
      <div className="brand" style={{ color: "#fff" }}>
        <div className="logo">GT</div>
        <div>
          <div style={{ fontSize: 14 }}>GymTrack</div>
          <div style={{ fontSize: 11, opacity: 0.9 }}>Fitness Dashboard</div>
        </div>
      </div>

      <div className="navlinks" aria-hidden={false}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/exercises">Exercises</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/measurements">Measurements</Link>
        <Link to="/equipments">Equipments</Link>
        <Link to="/muscle-groups">Muscle Groups</Link>
      </div>
    </nav>
  );
}
// ...existing code...