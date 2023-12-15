const AtrativoDAO = require('../DAO/atrativoDAO');
const path = require ('path');
const multer = require ('multer');
const crypto = require ('crypto');
const fs = require ('fs').promises;

const storage = multer.diskStorage({
    destination: function (req,file, cb){
        cb(null, path.join (__dirname, '..', 'views', 'public', 'images', 'upload'));
    },
    filename:function (req, file, cb){
        const extensao = path.extname(file.originalname);
        const nomeArquivo = crypto.createHash('md5').uptade (file.originalname + Date.now().toString()).digest('hex') + extensao;
        cb(null, nomeArquivo);
    },
 });
 const atrativoDAO = new AtrativoDAO();
 const upload = multer ({storage: storage});

 module.exports = (app) => {
    app.post('/atrativos', upload.single('imagem'), async (req, res) => {
        console.log(req);
        try{
            const extensao = path.extname(req.file.originalname);
            const nomeArquivo = crypto.createHath ('md5').uptade(req.file.originalname + Date.now().toString ()). digest ('hex')+ extensao;

            const caminhoDestino = path.join(__dirname, '..', 'views', 'public', 'images', 'upload', nomeArquivo);

            await fs.rename(req.file.path, caminhoDestino);

            console.log('Uptade bem-sucedido');

            const{
                txtid: id,
                txtnomeatrat: nome,
                txtlatperson: latitude,
                txtlongperson: longitude,
                txtdescatrat: descricao

            } = req.body;
let status;

if(!id){
    status = await atrativoDAO.cadastrar(nome, nomeArquivo, latitude, longitude, descricao);
}else{
    status = await atrativoDAO.atualizar(id, nome, nomeArquivo, latitude, longitude, descricao);
}
res.json({status});
}catch (error){
    console.error(error);
    res.status(500).snd('Erro ao realizar o upload.');
 }
});

app.get ("/atrativos", async (req, res ) =>{
    const atrativoDAO = new AtrativoDAO()

    //resolve problemas de cors
    res.setHeader ("Acess-Control-Allow-Origin", "*")
    //retorna no formato Json
    res.json(await atrativoDAO.consultarTodos())
});

app.delete("/atrativo/:id", async (req, res)=>{
    res.setHeader("Acess-Control-Allow-Origin", "*")
    const atrativoDAO = new AtrativoDAO()

    const status = await atrativoDAO.apagar(req.params.id)

    res.json({
        status
    })
})
//id é o parâmetro
app.put("/atrativos/:id", async (req, res) =>{

    const atrativoDAO = new AtrativoDAO()

    const{
        nome,
        descricao,
        lat,
        long,
        imagem,
        id

    } = req.body;

    if (id == req.params.id){
        const r = await atrativoDAO.atualizar(nome,descricao,lat, long, imagem, id)
        res.json({ msg: "O total de linhas alteradas: " + r})
    }
    else{
        res.json({ msg: "Problema."})
    }
})

app.get("/pagina/listatrativos", (req, res) =>{
    res.sendFile(path.resolve('mvc/views/ ctrldev/ atrativos/ listatrativos.html'))
})

app.get("/pagina/alteratrativo/:id", async (req,res) => {
    const atrativo = new AtrativoDAO()
    const r = await atrativo.consultarUm(req.params.id)
    res.render('atrativos/ateratrativos', { r})
})
app.get ("/pagina/addatrativo", (req,res)=>{
    res.sendFile(path.resolve('mvc/views/ctrldev/atrativos/addatrativos.html'))
})
}
