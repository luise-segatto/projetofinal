const Db = require("../../repository/Database");

//Representa uma skin do mundo real, concorda?
class Skin{

    #nome 
    #descricao 
    #raridade     
  
    //é um tipo de método padrão. Ele é invocado
    //quando o objeto é criado, ou seja, ele vai te
    //acompanhar e obrigar a passar os parametros declarados, se tiver.
    //exemplo const a = new Skin("Batata","Frita",100)
    constructor(nome, descricao, raridade){
        this.#nome = nome
        this.#descricao = descricao
        this.#raridade = raridade
    }

     //Dá uma estudada sobre encapsulamento rsrs
     //Mas basicamente com get e set você controla
     //como o usuario vai chamar os membros da classe
    get nome(){
        return this.#nome;
    }

    set nome(valor){
        this.#nome = valor;
    }

    //é uma função, mas aqui chamada de método, você
    // só não precisa usar o function
    toJson(){
        return {
            "nome": this.#nome
        }
    }
}


module.exports = Skin