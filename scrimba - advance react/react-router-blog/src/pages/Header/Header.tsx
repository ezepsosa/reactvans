import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <nav className="header">
        <h2 className="header-text">#VANLIFE</h2>
        <div className="header-text">
          <Link to="/">Home</Link>
          <Link to="Vans">Vans</Link>
        </div>
      </nav>
    </header>
  );
}
