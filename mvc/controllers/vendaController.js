const VendasDAO = require("../DAO/vendaDAO.js")
const path = require("path")
const Venda = require("../models/vendaModels.js")

module.exports = (app) => {
    app.get("/vendas", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
      
 
        //Você tem que fazer isso para os outros conseguirem acessar sua aplicação.
        //Repita essa configuração para as rotas que você quer liberar para ser acessada
        //por outras pessoas.
        
        res.sendFile(path.resolve("mvc/views/views/ctrldev/venda/addvendas.html"))
        //Retorna os dados
      
     })
     app.post("/registrarvenda",(req,res) =>{
        const vendaDAO = new VendasDAO();
        res.setHeader("Acess-Control-Allow-Origin","*")
        const {txthoravendas, txtdiavendas} = req.body

        vendaDAO.registrarVenda(txthoravendas, txtdiavendas)

        res.status(201).json({ 
            msg: "ok"
        })
    })
    app.get("/getVenda", async (req, res) => {
        const vendaDAO = new VendasDAO()      
            
        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(await vendaDAO.consultarVendas())
    })
    app.get("/vendas/lista", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        const vendaDAO = new VendasDAO()   
        const lista_vendas = await vendaDAO.consultarVendas()
        res.render("venda/listvendas", { vendas: lista_vendas })
    })
    app.delete("/vendas/apagar/:id", async (req,res) =>{
        const vendaDAO = new VendasDAO()  ;
        res.setHeader("Access-Control-Allow-Origin","*")
    
        res.json(await vendaDAO.apagarVenda(req.params.id))

    })
    app.get("/vendas/alterar/:id", async (req, res) => {
        const vendaDAO = new VendasDAO() 

        const dtvenda = await vendaDAO.consultarVendasId(req.params.id)

        res.render("venda/upvendas", { venda: dtvenda  })
    })
    app.put("/vendas/alterar", async (req, res) => {
        const vendaDAO = new VendasDAO() ;
        res.setHeader("Access-Control-Allow-Origin","*")

        //Destructuring
        const {hora, data,id } = req.body

        const r = await vendaDAO.atualizarVenda(id, hora, data)

        res.json({r})

    })
}