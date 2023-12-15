//Reusa as funções desse arquivo localizado em ../../DAO/skinDAO, lembre-se de fazer
// o module.exports lá no arquivo que você está chamando, se não vai dar erro.
const SkinDAO = require("../DAO/SkinDAO")

//pacotinho pra você trabalhar com caminho de arquivos, como ele você pode chegar
//em qualquer diretório ou arquivo de boa, você vai ver ali embaixo.
const path = require('path')

//Lembra que você usou o consign no startup? Então, nem tudo é mamão com acucar
//Você precisa fazer isso para usar o app do startup. O app é exatamente o app de lá
module.exports = (app) => {

    //Significa que você vai responder alguém quando você foi chamado na url
    // localhost:3000/getSkin do navegador
    app.get("/getSkin", async (req, res) => {
       const skinDAO = new SkinDAO()

       //Você tem que fazer isso para os outros conseguirem acessar sua aplicação.
       //Repita essa configuração para as rotas que você quer liberar para ser acessada
       //por outras pessoas.
       res.setHeader("Access-Control-Allow-Origin","*")

       //Retorna os dados
       res.json(await skinDAO.consultarSkins())
    })

    app.get("/skin", (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        
        res.sendFile(path.resolve("mvc/Views/Views/exemplo.html"))
    })

    //Diferente do Get, o post é pra receber dados. Aqui você em vez de enviar
    // vai receber, lembra do formulario do Ze da Manga que eu fiz na sala?
    app.post("/registrarskin", (req, res) => {
        
        res.setHeader("Access-Control-Allow-Origin","*")

        console.log(req.body)

        res.send('ok')

    })


}

