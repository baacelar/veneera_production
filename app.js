//loading modules
const express = require ('express') 
const bodyParser = require ('body-parser') 
const handlebars = require ('express-handlebars') 
const app = express()  
const admin = require ('./routes/admin') 
const router = require('./routes/admin')
const path = require ('path')
//configurations 
  
   //Body Parser 
      
     app.use(bodyParser.urlencoded({extended:true}));  
     app.use(bodyParser.json());  

   //express handlebars 

     app.engine ('handlebars', handlebars.engine({defaultLayout:'main'}));  
     app.set('view engine', 'handlebars');   
     
   //public bootstrap 
     
     app.use(express.static(path.join(__dirname,"/public")))
     
// routes 

app.use ('./admin', admin) 
app.use (router) 


// server   

const PORT = 3000
 
app.listen(PORT, ()=> { 
    console.log ('listening on port 8081')
});   








     
   




