const mongoose = require("mongoose");
const URI= "mongodb://localhost:27017/resenas"

const config ={
    config:{
        host: process.env.HOST || URI,
        port: process.env.PORT || 3000||3001,
        
    }
    
}
mongoose.connect(URI)
.then(db=>console.log("Base de datos conectada..."))
.catch(err=>console.error(err));

module.exports=mongoose
module.exports= config
