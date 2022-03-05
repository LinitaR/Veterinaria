const express = require("express");
const app = express();
const {doctores} = require("./routes/doctores");
const {registros} = require("./routes/registros");
const cors = require('cors')
require("./db/mongo").connectMongo();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/doctores', doctores);
app.use('/registros', registros);


app.listen(4000,()=>{
    console.log("Estoy funcionando como servidor http en la ruta http://localhost:4000")
})
