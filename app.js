//loading modules
const express = require ('express');   
const bodyParser = require ('body-parser');  
const handlebars = require ('express-handlebars') 
const app = express()  

//configurations 
  
   //Body Parser 
      
     app.use(bodyParser.urlencoded({extended:true}));  
     app.use(bodyParser.json());  

   //express handlebars 

     app.engine ('handlebars', handlebars.engine({defaultLayout:'main'}));  
     app.set('view engine', 'handlebars');    
     

// server   

const PORT = 8081 
app.listen(PORT, ()=> { 
    console.log ('listening on port 8081')
});    


     
   




