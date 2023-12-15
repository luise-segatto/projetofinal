const AtrativoDAO = require('../DAO/atrativoDAO');
const path = require('path');
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs').promises;


module.exports = (app) => {

    app.get("/conjuntomasc", (req, res) => {
        res.sendFile(path.resolve('mvc/views/loja/produtos/skinpalleteconjuntomasc/conjuntomasc.html'))
    })
    app.get("/orelhacoelho", (req, res) => {
        res.sendFile(path.resolve('mvc/views/loja/produtos/skin-pallete-orelha-de-coelho/orelhacoelho.html'))
    })

    app.get("/mochila", (req, res) => {
        res.sendFile(path.resolve('mvc/views/loja/produtos/skin-pallete-mochila/mochila.html'))
    })

    app.get("/buket", (req, res) => {
        res.sendFile(path.resolve('mvc/views/loja/produtos/skin-pallete-buket/buket.html'))
    })

    app.get("/chapeucol", (req, res) => {
        res.sendFile(path.resolve('mvc/views/loja/produtos/skin-pallete-chapeucol/chapeucol.html'))
    })

    app.get("/chapeucowboy", (req, res) => {
        res.sendFile(path.resolve('mvc/views/loja/produtos/skin-pallete-chapeucowboy/chapeucowboy.html'))
    })

    app.get("/chapeubruxo", (req, res) => {
        res.sendFile(path.resolve('mvc/views/loja/produtos/skin-pallete-chapeubruxo/chapeubruxo.html'))
   
    })
    app.get("/chapeufem", (req, res) => {
        res.sendFile(path.resolve('mvc/views/loja/produtos/skin-pallete-chapeu-fem/chapeufem.html'))
   
    })
    app.get("/chapeuform", (req, res) => {
   
        res.sendFile(path.resolve('mvc/views/loja/produtos/skin-pallete-chapeuform/chapeuform.html'))
    })
    app.get ("/coroafem", (req,res)=>{
        res.sendFile(path.resolve('mvc/views/loja/produtos/skin-pallete-coroafem/coroafem.html'))
        })
    app.get ("/lacinho", (req,res)=>{
            res.sendFile(path.resolve('mvc/views/loja/produtos/skin-pallete-lacinho/lacinho.html'))
            })
    app.get ("/conjuntofem", (req,res)=>{
                res.sendFile(path.resolve('mvc/views/loja/produtos/skin-pallete-conjuntofem/conjuntofem.html'))
                })



}