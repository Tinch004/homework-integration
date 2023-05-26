import SearchBar from "./SearchBar";
import style from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.barra}>
      <SearchBar onSearch={onSearch} />

      <Link to="about">
        {" "}
        <button className={style.aboutButton}>About</button>
      </Link>

      <NavLink to="home">
        <button className={style.homeButton}>Home</button>
      </NavLink>

      <NavLink to='/favorites'>
          <button className={style.favoriteButton}>Favorites</button>
      </NavLink>
    </div>
  );
};

export default Nav;
