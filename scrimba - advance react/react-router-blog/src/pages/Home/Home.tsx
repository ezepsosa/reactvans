import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <h1 className="home-container-text">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="home-container-text">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="vans" className="btn btn-primary">
        Find your van
      </Link>
    </div>
  );
}

export default Home;
