import { Button } from "./components/Button";
import { FaGoogle } from "react-icons/fa";

function App() {
  /**
   * Challenge:
   *
   * Build a Button component in a separate file.
   * (For styling purposes, make sure it renders an HTML <button> element)
   * Your button component should take a `text` prop
   */

  function showMessage() {
    console.log("Logging in");
  }

  return (
    <Button size={"lg"} variant={"danger"} showMessageFunction={showMessage}>
      <FaGoogle /> Buy Now!
    </Button>
  );
}

export default App;
