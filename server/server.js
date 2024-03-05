const express = require ("express");
const app = express();
const cors = require("cors");
require ("dotenv").config();
const port = process.env.PORT ;
const cookieParser = require('cookie-parser')
// MIDDLEWARE 
app.use(express.json(), express.urlencoded({ extended: true,limit:"500mb"}), cors({origin:'http://localhost:5173',credentials:true, methods:['GET', 'POST','PATCH', 'PUT','DELETE']}), cookieParser());
// grab the config
require ("./config/mongoose.config");
// GRAB THE ROUTEs
require("./routes/cars.routes")(app);
require('./routes/user.routes')(app);
app.listen(port, ()=>{
    console.log("Listenning to port " + port);
})
