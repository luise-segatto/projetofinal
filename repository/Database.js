const mysql = require("mysql2")

class Database {

    #connection

    constructor() {

        //Configuração do banco
        this.#connection = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "",
            database: "bdgp"
        }).promise()
    }

    async selecionarSkins() {
        const skinsData = await this.#connection.query("select * from skins;")
        return skinsData[0]
    }

    async selecionarCupons() {
        const cuponsData = await this.#connection.query("select * from cupons;")
        return cuponsData[0]
    }

    async selecionarCuponId(id) {
        const cuponsData = await this.#connection.query("select * from cupons where id_cupom ="+id)
        return cuponsData[0]
    }

    async insertCupom(nome, codigo, validade, valor) {
        const retorno = await this.#connection.execute(`
        INSERT INTO cupons (codigo_cupom, nome_cupom, validade_cupom, valor_cupom) VALUES
        ('${codigo}', '${nome}', '${validade}', ${valor});
      `)
    }
    async selecionarDescontos() {
        const promocoesData = await this.#connection.query("select * from descontos;")
        return promocoesData[0]
      }
    async selecionarDescontosId(id) {
        const descontosData = await this.#connection.query("select * from descontos where id_desconto ="+id)
        return descontosData[0]
      }
      async selecionarVendas() {
        const atrativosData = await this.#connection.query("select * from vendas;")
        return atrativosData[0]
      }
      async selecionarVendasId(id) {
        const vendasData = await this.#connection.query("select * from vendas where id_venda ="+id)
        return vendasData[0]
      }
         

    async insertSkin(categoria, nome, descricao, genero, valor, raridade, foto1, foto2, promocao) {
        const sql = `
        insert into skins (categoria_skin, nome_skin, descr_skin,
            genero_skin, valor_skin, raridade_skin, foto1_skin, foto2_skin,
            promocoes_id_promocao) 
            values ('${categoria}','${nome}','${descricao}','${genero}',
            ${valor}, '${raridade}','${foto1}','${foto2}',${promocao})
        `
        const bd = await this.#connection.execute(sql)
        return bd[0]

    }
    async insertDesconto(valor)
       {
      const retorno = await this.#connection.execute(`
        insert into descontos (valor_desconto) 
            values ('${valor}')
        `)
    }
    async insertVenda(hora,dia)
    {
   const retorno = await this.#connection.execute(`
     insert into vendas (hora_venda,dia_venda) 
         values ('${hora}','${dia}')
     `)
 }

    async deleteCupom(id) {
        const sql = `
        delete from cupons
        where id_cupom = ${id};
        `

        const dt = await this.#connection.execute(sql)
        return dt[0]
    }

     async updateCupom(codigo, nome, validade, valor, id) {
        const sql = `  update cupons
            set codigo_cupom = "${codigo}",
                nome_cupom = "${nome}",
                validade_cupom = "${validade}",
                valor_cupom = ${valor}
            where id_cupom = ${id};`

        const dtbs = await this.#connection.execute(sql)
        return dtbs[0]
    }


    async deleteDesconto(id) {
        const sql = `
        delete from descontos
        where id_desconto = ${id};
        `
      
        const dt = await this.#connection.execute(sql)
        return dt[0]
      }   
      async updateDesconto(id,valor) {
        const sql = `    UPDATE descontos
        SET valor_desconto = "${valor}"
        WHERE id_desconto = ${id};
      `;
      
        const dtbs = await this.#connection.execute(sql)
        return dtbs[0]
      }
      
      async deleteVenda(id) {
        const sql = `
        delete from vendas
        where id_venda = ${id};
        `
      
        const dt = await this.#connection.execute(sql)
        return dt[0]
      }   
      
      async updateVenda(id,hora,dia) {
        const sql = `   UPDATE vendas
        SET dia_venda = "${dia}",
        hora_venda = "${hora}"
        WHERE id_venda = ${id};
      `;
      
        const dtbs = await this.#connection.execute(sql)
        return dtbs[0]
      }


}

module.exports = Database