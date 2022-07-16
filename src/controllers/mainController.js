//const path = require('path');
//Fuentes de datos
const platos = require ('../dataBase/platos.js')


//Objeto literal mainController
//Viene de mainRouter a cada modulo
const mainController = {
    index: (req,res) => {
        res.render('index');
    },
    productCart: (req,res) => {
        res.render('productCart');
    },
    login: (req, res) => {
        res.render('../views/users/login.ejs');
    },
    register:(req, res) => {
        res.render('../views/users/register.ejs');
    },
    productDetail: (req,res) => {
        res.render('productDetail');
    },
    
}

module.exports = mainController