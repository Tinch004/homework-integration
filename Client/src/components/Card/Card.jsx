import style from './Card.module.css'
import { NavLink , useLocation, uselocation} from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import {connect} from 'react-redux'
import { useState, useEffect } from 'react';




function Card({ id, name, status, species, gender, origin, image, onClose, myFavorites, addFav, removeFav }) {
const location  =useLocation()
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () =>{
    isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
    setIsFav(!isFav)
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);





  return (
    <div className={style.container}>
      {" "}
      <div className={style.card}>
      {
   isFav ? (
      <button className={style.botonfavorito} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={style.botonfavorito} onClick={handleFavorite}>🤍</button>
   )
}
        <NavLink to={`/detail/${id}`}>
          {" "}
          <div>
            <img src={image} alt="" />
          </div>
        </NavLink>
        <h2>{name}</h2>
        <p>{status}</p>
        <p>{species}</p>
        <p>{gender}</p>
        <p>{origin}</p>
        
        {location.pathname === '/home' && <button onClick={() => onClose(id)}>X</button>}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  }
};

const mapStateToProps =(state)=>{
  return{
    myFavorites: state.myFavorites
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Card)
