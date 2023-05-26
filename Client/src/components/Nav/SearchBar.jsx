import { useState } from "react";
import style from "./Nav.module.css";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  const handleChange = (event) => {
  
    setId(event.target.value);
  };

  const handleSearch = () => {
    onSearch(id);
     setId("");
  };

  return (
    <div className={style.container}>
      <input
        type="search"
        className={style.search}
        onChange={handleChange}
        value={id}
        placeholder="id..."
      />
      <button
        onClick={() => {
          handleSearch();
        }}
        className={style.boton}
      >
        Agregar
      </button>
    </div>
  );
};
export default SearchBar;
