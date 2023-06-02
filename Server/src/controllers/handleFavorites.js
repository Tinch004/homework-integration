const myFavorites = [];

const postFav =(req, res)=>{
    const data = req.body
    myFavorites.push(data)

   return res.status(200).json(myFavorites)

}

const deleteFav=(req, res)=>{
    const {id} = req.body
    myFavorites= myFavorites.filter(char=>char.id!==Number(id))
    return res.status(200).json(myFavorites)

}

module.exports={postFav, deleteFav}