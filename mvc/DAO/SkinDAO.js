const Skin = require("../models/SkinModel");
const Database = require("../../repository/Database");

class SkinDAO {

    #conexao

    constructor() {
        this.#conexao = new Database();
    }

    async consultarSkins() {

        const lista_skins = []
        const skins = await this.#conexao.selecionarSkins()

        if (skins) {
            for (const skin of skins) {
                const objSkin = new Skin()
                objSkin.nome = skin.nome_skin
                objSkin.categoria = skin.categoria_skin
                objSkin.descricao = skin.descr_skin
                objSkin.genero = skin.genero_skin
                objSkin.valor = skin.valor_skin
                objSkin.raridade= skin.raridade_skin
                objSkin.foto1 = skin.foto1_skin
                objSkin.foto2 = skin.foto2_skin
                
                lista_skins.push(objSkin.toJson())
            }
        }

        return lista_skins
    }
    registrarSkin(nome, categoria, descricao, genero, valor, raridade, foto1, foto2){

        const skin = new skin()

        skin.nomeSkin = nome
        skin.categoriaSkin = categoria
        skin.descrSkin = descricao
        skin.generoSkin = genero
        skin.valorSkin = valor
        skin.raridadeSkin = raridade
        skin.foto1Skin = foto1
        skin.foto2 = foto2
        



        this.#conexao.insertSkin(skin.nomeSkin, skin.categoriaSkinkin, skin.descrSkin, skin.generoSkin, skin.valorSkin, skin.raridadeSkin, skin.foto1Skin, skin.foto2_skin)
    }
}

module.exports = SkinDAO



