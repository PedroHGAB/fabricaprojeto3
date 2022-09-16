import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Chuck Facts</Link>
          </li>
          <li>
            <Link to="/dadJoke">Dads Joke</Link>
          </li>
        </ul>
      </nav>

        <Outlet/>
      
    </>
  );
}

export default Navbar;