import { Link } from "react-router-dom";
import { useState } from "react";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Moviestar
        </Link>
      </h2>
      <form>
        <input
          type="text"
          placeholder="Busque o seu filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
