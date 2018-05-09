const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app =   express();

//PARTIE SERVEUR WEB EXPRESS 
app.get('/',function(req,res){
      res.sendFile(__dirname + "/public/index.html");
});


// POUR TOUS LES AUTRES FICHIERS REGARDER DANS CES REPERTOIRES
app.use(express.static(path.join(__dirname, 'public')))




// LANCER LE SERVEUR NODE
app.listen(PORT,function(){
    console.log(`Listening on ${ PORT }`);
});