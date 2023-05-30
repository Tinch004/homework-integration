const axios =require ('axios')


const URL = "https://rickandmortyapi.com/api/character/"


const getCharById= (req, res)=>{

  axios.get(`${URL}/${req.params.id}`)
  .then(response => {
    // Manejar la respuesta exitosa
    console.log(response.data);
  })
  .catch(error => {
    // Manejar el error
    console.error(error);
  });

}


module.exports= {getCharById}