const {Sequelize} = require('sequelize')


const dataBase = new Sequelize('postgres://postgres:ruben2004@localhost:5432/dbname');


module.exports= {dataBase}