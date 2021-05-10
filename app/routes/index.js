module.exports = function(app){
    app.get('/', function(req,res){ 
        app.app.controllers.index.consulta(app,req,res);
    });  
    
    app.get('/cadastrar', function(req,res){ 
        app.app.controllers.index.form(app,req,res,"insert");
    });  
    app.post('/insert', function(req,res){ 
        app.app.controllers.index.insert(app,req,res);
    }); 

    app.get('/alterar', function(req,res){
        app.app.controllers.index.form(app,req,res,"update");
    });  
    app.post('/update', function(req,res){ 
        app.app.controllers.index.update(app,req,res);
    }); 

    app.get('/deletar', function(req,res){ 
        app.app.controllers.index.delete(app,req,res);
    });  
    
}