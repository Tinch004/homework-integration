const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { name, gender, species, images, id, origin, status } =
      await axios.get(`${URL}/${req.params.id}`).data;
    const character = {
      id:id,
      name:name,
      gender:gender,
      species:species,
      origin:origin,
      status:status,
      images:images,
    };

    return character.name
      ? res.status(200).json(character)
      : res.status(404).sen("Not fount!");
  } catch (error) {
    res.status(500).send(error.massage);
  }
};

module.exports = { getCharById };
