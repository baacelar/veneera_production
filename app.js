//loading modules
const express = require ('express') 
const bodyParser = require ('body-parser') 
const handlebars = require ('express-handlebars') 
const app = express()  
const admin = require ('./routes/admin') 

//configurations 
  
   //Body Parser 
      
     app.use(bodyParser.urlencoded({extended:true}));  
     app.use(bodyParser.json());  

   //express handlebars 

     app.engine ('handlebars', handlebars.engine({defaultLayout:'main'}));  
     app.set('view engine', 'handlebars');    
     
// routes 

app.use ('./admin', admin)

// server   

const PORT = 8081 
app.listen(PORT, ()=> { 
    console.log ('listening on port 8081')
});   








     
   




