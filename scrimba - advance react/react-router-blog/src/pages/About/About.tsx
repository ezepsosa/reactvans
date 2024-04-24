import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="banner-container">
        <img
          className="about-container-img"
          src="src/assets/banner_about.jpg"
          alt=""
        />
      </div>
      <h1 className="about-container-text">
        Don’t squeeze in a sedan when you could relax in a van.
      </h1>
      <p className="about-container-text">
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉) <br /> Our team
        is full of vanlife enthusiasts who know firsthand the magic of touring
        the world on 4 wheels.
      </p>
      <div className="card">
        <div className="card-text">
          <h2 className="about-container-text">
            Your destination is waiting. Your van is ready.
          </h2>
        </div>
        <Link to="vans" className="btn btn-secondary">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
