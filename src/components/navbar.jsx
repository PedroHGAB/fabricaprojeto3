import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <link to="/">Home Page</link>
          </li>
          <li>
            <link to="/dadJoke">Home Page</link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;