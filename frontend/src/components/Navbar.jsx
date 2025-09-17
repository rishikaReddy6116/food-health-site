import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>SnackWise</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/scanner">Food Scanner</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
