import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useState} from "react";

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();


  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  const handleFilter = (event) => {
  

    dispatch(filterCards(event.target.value));
  };

  return (

    <div >


<select className={style.selector} onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descentende</option>
      </select>
      <select className={style.selector} onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    <div className={style.container}>
     

      {myFavorites?.map(
        ({ id, name, status, species, gender, origin, image,}) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
             
            />
          );
        }
      )}
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
