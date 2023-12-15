class Vendas{
    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }
    hora
    get hora() {
        return this.hora
    }
    set hora(value) {
        this.hora = value
    }
    dia
    get dia() {
        return this.dia
    }
    set dia(value) {
        this.dia = value
    }
    constructor(id,hora,dia){
        this.id=id
        this.hora=hora
        this.dia=dia
    }

    toJson(){

        return{
            "id":this.#id,
            "hora":this.hora,
            "dia":this.dia,
        }
    }
}
module.exports=Vendas