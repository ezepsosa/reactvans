import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <nav className="header">
        <h2 className="header-text header-text-logo">
          <Link to="/">#VANLIFE</Link>
        </h2>
        <div className="header-text header-text-link">
          <Link to="about">About</Link>
          <Link to="vans">Vans</Link>
        </div>
      </nav>
    </header>
  );
}
