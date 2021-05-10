var listaCrud = [
    {
    codigo: 0,
    descricao: "Item teste",
    quantidade: 10,
    preco: 50
    }
]

module.exports.consulta = function(app,req,res){
    res.render("index.ejs", {msg: listaCrud});
}
module.exports.form = function(app,req,res,acao){
    if(req.query){
        var codigo = req.query;
    }
    res.render("form.ejs", {acao: acao,codigo: codigo});
}
module.exports.insert = function(app,req,res){
    const dadosForm = req.body;
    if(listaCrud.find(x => x.codigo == dadosForm.codigo)){
        res.send("Código já existente");
    }else{
        listaCrud.push(dadosForm);
        res.redirect("/")
    }
}
module.exports.update = function(app,req,res){
    const dadosForm = req.body;
    if(listaCrud.find(x => x.codigo == dadosForm.codigo)){
        var index = listaCrud.findIndex(x => x.codigo == dadosForm.codigo)
        listaCrud[index].descricao = dadosForm.descricao;
        listaCrud[index].quantidade = dadosForm.quantidade;
        listaCrud[index].preco = dadosForm.preco;
        res.redirect("/");
    }else{
        res.send("Item não encontrado");
    }
}
module.exports.delete = function(app,req,res){
    const dadosForm = req.query;
    if(listaCrud.find(x => x.codigo == dadosForm.codigo)){
        var index = listaCrud.findIndex(x => x.codigo == dadosForm.codigo)
        listaCrud.splice(index);
        res.redirect("/");
    }else{
        res.send("Item não encontrado");
    }
}
