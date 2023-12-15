const Atrativo = require('../models/atrativoModel')
const Db = require('../../repository/Database')

class AtrativoDAO{

    #db

    constructor(){
        this.#db = new Db()
    }

    async cunsultarTodos(){

        let list_atrativos = []

        const query = await this.#db.selectAtrativos()

        for(let index = 0; index < query.length; index ++ ){
            const atrativo =  new Atrativo()

            atrativo.id = query[index].id_atrativos
            atrativo.nome = query[index].nome_atrativos
            atrativo.latitude = query[index].lat_atrativos
            atrativo.longitude = query[index].long_atrativos
            atrativo.descricao = query[index].desc_atrativos
            atrativo.imagem = query[index].image_atrativos

            list_atrativos.push (atrativo.toJson())
        }
        return list_atrativos
    }
    async consultarUm(id){
        const query = await this.#db.selectAtrativoId(id)

        const atrativo = new Atrativo()

        if(query){
            atrativo.id= query[0].id_atrativos
            atrativo.nome= query[0].nome_atrativos
            atrativo.latitude= query[0].lat_atrativos
            atrativo.longitude= query[0].llong_atrativos
            atrativo.descricao= query[0].desc_atrativos
            atrativo.imagem= query[0].image_atrativos
        }
        return atrativo.toJson()
    }
    async cadastrar(nome, imagem, latitude, longitude, descricao){
        const atrativo = new Atrativo(nome, latitude, longitude)

        atrativo.descricao = descricao
        atrativo.imagem = imagem

        const sql = await this.#db.insertAtrativos(atrativo.toJson())

        return sql.insertId;
        
    }
    async  apagar(id){
        const linhasAfetadas = await this.#db.deleteAtrativos (id)
        return linhasAfetadas.affectedRows
    }
    async atualizar (nome, descricao, lat, long, imagem, id){
        const atrativo = new Atrativo (nome, lat, long)
        atrativo.descricao = descricao
        atrativo.imagem = imagem
        atrativo.id = id

        const r = await this.#db.uptadeAtrativo(
            atrativo.nome,
            atrativo.latitude,
            atrativo.longitude,
            atrativo.descricao,
            atrativo.imagem,
            atrativo.id
        )
        return r.affectedRows;

}
}

module.exports = AtrativoDAO